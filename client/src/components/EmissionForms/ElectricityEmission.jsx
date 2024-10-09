import { useState, useRef, useEffect } from "react";
import { COUNTRIES } from "../../data/countries";
import "./FormStyles.css";

const DATA_FIELDS = {
  country_name: "",
  electricity_value: "",
  electricity_unit: "kWh",
};

function ElectricityEmission({ onFormSubmit }) {
  const [electricityData, setElectricityData] = useState(DATA_FIELDS);
  const [getElectricityData, setGetElectricityData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState(COUNTRIES);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);

  const handleInput = (e) => {
    setElectricityData({ ...electricityData, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setFilteredCountries(
      COUNTRIES.filter((country) =>
        country.toLowerCase().includes(query.toLowerCase())
      )
    );
    setShowDropdown(true);
  };

  const handleCountrySelect = (country) => {
    setElectricityData({ ...electricityData, country_name: country });
    setSearchQuery(country);
    setShowDropdown(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/emission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(electricityData),
      });

      const res_data = await response.json();

      if (!response.ok) {
        console.log(
          "Something went wrong with electricity emission response",
          res_data
        );
      } else {
        setGetElectricityData(res_data);
        setElectricityData(DATA_FIELDS);
        onFormSubmit(res_data.data.co2e_kg);
      }
    } catch (error) {
      console.log("Electricity emission Error: " + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Electricity Emission</h2>

      <div className="form-group" ref={dropdownRef}>
        <label htmlFor="country_name">Country Name:</label>
        <div className="autocomplete-container">
          <input
            type="text"
            placeholder="e.g., USA"
            value={searchQuery}
            onChange={handleSearch}
            onFocus={() => setShowDropdown(true)}
          />
          {showDropdown && searchQuery && filteredCountries.length > 0 && (
            <ul className="dropdown">
              {filteredCountries.map((country) => (
                <li key={country} onClick={() => handleCountrySelect(country)}>
                  {country}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="electricity_value">Electricity Used (kWh):</label>
        <input
          type="text"
          placeholder="e.g., 100"
          className="form-input "
          name="electricity_value"
          id="electricity_value"
          value={electricityData.electricity_value}
          onChange={handleInput}
        />
      </div>

      <button
        type="button"
        className="calculate-button"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Calculating..." : "Calculate Emission"}
      </button>

      {getElectricityData && (
        <div className="result-container">
          <p>Your CO2 Emissions: {getElectricityData.data.co2e_kg} kg</p>
        </div>
      )}
    </div>
  );
}

export default ElectricityEmission;
