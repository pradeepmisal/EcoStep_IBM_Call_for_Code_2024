import { useState, useRef, useEffect } from "react";
import { AIRPORTS } from "../../data/airports";
import "./FormStyles.css";

const DATA_FIELDS = {
  iata_airport_from: "",
  iata_airport_to: "",
  flight_class: "",
  round_trip: "Y",
  number_of_passengers: "",
};

function FlightEmission({ onFormSubmit }) {
  const [flightData, setFlightData] = useState(DATA_FIELDS);
  const [getFlightData, setGetFlightData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filteredAirports, setFilteredAirports] = useState(AIRPORTS);
  const [searchQueryFrom, setSearchQueryFrom] = useState("");
  const [searchQueryTo, setSearchQueryTo] = useState("");
  const [showDropdownFrom, setShowDropdownFrom] = useState(false);
  const [showDropdownTo, setShowDropdownTo] = useState(false);
  const [showFlightClassDropdown, setShowFlightClassDropdown] = useState(false);
  const [showRoundTripDropdown, setShowRoundTripDropdown] = useState(false);

  const dropdownRefFrom = useRef(null);
  const dropdownRefTo = useRef(null);
  const flightClassRef = useRef(null);
  const roundTripRef = useRef(null);

  const handleInput = (e) => {
    setFlightData({ ...flightData, [e.target.name]: e.target.value });
  };

  const handleSearchFrom = (e) => {
    const query = e.target.value;
    setSearchQueryFrom(query);
    setFilteredAirports(
      AIRPORTS.filter((airport) =>
        airport.name.toLowerCase().includes(query.toLowerCase())
      )
    );
    setShowDropdownFrom(true);
  };

  const handleSearchTo = (e) => {
    const query = e.target.value;
    setSearchQueryTo(query);
    setFilteredAirports(
      AIRPORTS.filter((airport) =>
        airport.name.toLowerCase().includes(query.toLowerCase())
      )
    );
    setShowDropdownTo(true);
  };

  const handleAirportSelect = (code, field) => {
    setFlightData({ ...flightData, [field]: code });
    if (field === "iata_airport_from") {
      setSearchQueryFrom(
        AIRPORTS.find((airport) => airport.code === code)?.name || ""
      );
      setShowDropdownFrom(false);
    } else {
      setSearchQueryTo(
        AIRPORTS.find((airport) => airport.code === code)?.name || ""
      );
      setShowDropdownTo(false);
    }
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRefFrom.current &&
      !dropdownRefFrom.current.contains(event.target)
    ) {
      setShowDropdownFrom(false);
    }
    if (
      dropdownRefTo.current &&
      !dropdownRefTo.current.contains(event.target)
    ) {
      setShowDropdownTo(false);
    }
    if (
      flightClassRef.current &&
      !flightClassRef.current.contains(event.target)
    ) {
      setShowFlightClassDropdown(false);
    }
    if (roundTripRef.current && !roundTripRef.current.contains(event.target)) {
      setShowRoundTripDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/emission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(flightData),
      });

      const res_data = await response.json();

      if (!response.ok) {
        console.log(
          "Something went wrong with flight emission response",
          res_data
        );
      } else {
        setGetFlightData(res_data);
        setFlightData(DATA_FIELDS);
        onFormSubmit(res_data.data.co2e_kg);
      }
    } catch (error) {
      console.log("Flight emission Error: " + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Flight Emission</h2>

      <div className="form-group" ref={dropdownRefFrom}>
        <label htmlFor="iata_airport_from">From:</label>
        <div className="autocomplete-container">
          <input
            type="text"
            placeholder="Search Airport"
            value={searchQueryFrom}
            onChange={handleSearchFrom}
            onFocus={() => setShowDropdownFrom(true)}
          />
          {showDropdownFrom &&
            searchQueryFrom &&
            filteredAirports.length > 0 && (
              <ul className="dropdown">
                {filteredAirports.map((airport) => (
                  <li
                    key={airport.code}
                    onClick={() =>
                      handleAirportSelect(airport.code, "iata_airport_from")
                    }
                  >
                    {airport.name} ({airport.code})
                  </li>
                ))}
              </ul>
            )}
        </div>
      </div>

      <div className="form-group" ref={dropdownRefTo}>
        <label htmlFor="iata_airport_to">To:</label>
        <div className="autocomplete-container">
          <input
            type="text"
            placeholder="Search Airport"
            value={searchQueryTo}
            onChange={handleSearchTo}
            onFocus={() => setShowDropdownTo(true)}
          />
          {showDropdownTo && searchQueryTo && filteredAirports.length > 0 && (
            <ul className="dropdown">
              {filteredAirports.map((airport) => (
                <li
                  key={airport.code}
                  onClick={() =>
                    handleAirportSelect(airport.code, "iata_airport_to")
                  }
                >
                  {airport.name} ({airport.code})
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="form-group" ref={flightClassRef}>
        <label htmlFor="flight_class">Flight Class:</label>
        <div className="custom-select-container">
          <div
            className="custom-select"
            onClick={() => setShowFlightClassDropdown(!showFlightClassDropdown)}
          >
            {flightData.flight_class || "Select Flight Class"}
            <span className="arrow">▼</span>
          </div>
          {showFlightClassDropdown && (
            <ul className="options-dropdown">
              {["economy", "premium", "business", "first"].map((classType) => (
                <li
                  key={classType}
                  className="option"
                  onClick={() => {
                    setFlightData({
                      ...flightData,
                      flight_class: classType,
                    });
                    setShowFlightClassDropdown(false);
                  }}
                >
                  {classType.charAt(0).toUpperCase() + classType.slice(1)}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="form-group" ref={roundTripRef}>
        <label htmlFor="round_trip">Round Trip:</label>
        <div className="custom-select-container">
          <div
            className="custom-select"
            onClick={() => setShowRoundTripDropdown(!showRoundTripDropdown)}
          >
            {flightData.round_trip === "Y" ? "Yes" : "No"}
            <span className="arrow">▼</span>
          </div>
          {showRoundTripDropdown && (
            <ul className="options-dropdown">
              <li
                className="option"
                onClick={() => {
                  setFlightData({ ...flightData, round_trip: "Y" });
                  setShowRoundTripDropdown(false);
                }}
              >
                Yes
              </li>
              <li
                className="option"
                onClick={() => {
                  setFlightData({ ...flightData, round_trip: "N" });
                  setShowRoundTripDropdown(false);
                }}
              >
                No
              </li>
            </ul>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="number_of_passengers">Passengers:</label>
        <input
          className="form-input "
          type="number"
          placeholder="e.g., 2"
          name="number_of_passengers"
          id="number_of_passengers"
          value={flightData.number_of_passengers}
          onChange={handleInput}
          required
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

      {getFlightData && (
        <div className="result-container">
          <p>Your CO2 Emissions: {getFlightData.data.co2e_kg} kg</p>
        </div>
      )}
    </div>
  );
}

export default FlightEmission;
