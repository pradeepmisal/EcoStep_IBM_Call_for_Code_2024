import { useState, useEffect, useRef } from "react";
import "./FormStyles.css";

const DATA_FIELDS = {
  vehicle_type: "",
  fuel_type: "",
  distance_value: "",
  distance_unit: "km",
  include_wtt: "Y",
};

function VehicleEmission({ onFormSubmit }) {
  const [vehicleData, setVehicleData] = useState(DATA_FIELDS);
  const [getVehicleData, setGetVehicleData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [vehicleDropdownOpen, setVehicleDropdownOpen] = useState(false);
  const [fuelDropdownOpen, setFuelDropdownOpen] = useState(false);
  const [selectedVehicleType, setSelectedVehicleType] = useState(
    "Select Vehicle Type"
  );
  const [selectedFuelType, setSelectedFuelType] = useState("Select Fuel Type");

  const vehicleRef = useRef();
  const fuelRef = useRef();

  const handleInput = (e) => {
    setVehicleData({ ...vehicleData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/emission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vehicleData),
      });

      const res_data = await response.json();

      if (!response.ok) {
        console.log(
          "Something went wrong with vehicle emission response",
          res_data
        );
      } else {
        setGetVehicleData(res_data);
        setVehicleData(DATA_FIELDS);
        onFormSubmit(res_data.data.co2e_kg);
      }
    } catch (error) {
      console.log("Vehicle emission Error: " + error);
    } finally {
      setLoading(false);
    }
  };

  const toggleVehicleDropdown = () => {
    setVehicleDropdownOpen(!vehicleDropdownOpen);
    setFuelDropdownOpen(false); // Close fuel dropdown if it's open
  };

  const toggleFuelDropdown = () => {
    setFuelDropdownOpen(!fuelDropdownOpen);
    setVehicleDropdownOpen(false); // Close vehicle dropdown if it's open
  };

  const selectVehicleType = (type) => {
    setSelectedVehicleType(type);
    setVehicleData({ ...vehicleData, vehicle_type: type });
    setVehicleDropdownOpen(false);
  };

  const selectFuelType = (type) => {
    setSelectedFuelType(type);
    setVehicleData({ ...vehicleData, fuel_type: type });
    setFuelDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (vehicleRef.current && !vehicleRef.current.contains(event.target)) {
      setVehicleDropdownOpen(false);
    }
    if (fuelRef.current && !fuelRef.current.contains(event.target)) {
      setFuelDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="form-container">
      <h2>Vehicle Emission</h2>

      <div className="form-group">
        <label htmlFor="vehicle_type">Vehicle Type:</label>
        <div className="custom-select-container" ref={vehicleRef}>
          <div className="custom-select" onClick={toggleVehicleDropdown}>
            {selectedVehicleType}
            <span className="arrow">▼</span>
          </div>
          {vehicleDropdownOpen && (
            <ul className="options-dropdown">
              {[
                "Car-Type-Mini",
                "Car-Type-Supermini",
                "Car-Type-LowerMedium",
                "Car-Type-UpperMedium",
                "Car-Type-Executive",
                "Car-Type-Luxury",
                "Car-Type-Sports",
                "Car-Type-4x4",
                "Car-Type-MPV",
                "Car-Size-Small",
                "Car-Size-Medium",
                "Car-Size-Large",
                "Car-Size-Average",
                "Motorbike-Size-Small",
                "Motorbike-Size-Medium",
                "Motorbike-Size-Large",
                "Motorbike-Size-Average",
                "Bus-LocalAverage",
                "Bus-Coach",
                "Taxi-Local",
                "Train-National",
                "Train-Local",
                "Train-Tram",
              ].map((option) => (
                <li
                  key={option}
                  className="option"
                  onClick={() => selectVehicleType(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="fuel_type">Fuel Type:</label>
        <div className="custom-select-container" ref={fuelRef}>
          <div className="custom-select" onClick={toggleFuelDropdown}>
            {selectedFuelType}
            <span className="arrow">▼</span>
          </div>
          {fuelDropdownOpen && (
            <ul className="options-dropdown">
              {[
                { value: "petrol", label: "Petrol" },
                { value: "diesel", label: "Diesel" },
                {
                  value: "rapid_do_not_include_in_request_key",
                  label: "Other",
                },
              ].map(({ value, label }) => (
                <li
                  key={value}
                  className="option"
                  onClick={() => selectFuelType(value)}
                >
                  {label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="distance_value">Distance (km):</label>
        <input
          type="text"
          placeholder="e.g., 50"
          className="form-input "
          name="distance_value"
          id="distance_value"
          value={vehicleData.distance_value}
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

      {getVehicleData && (
        <div className="result-container">
          <p>CO2 Emissions: {getVehicleData.data.co2e_kg} kg</p>
        </div>
      )}
    </div>
  );
}

export default VehicleEmission;
