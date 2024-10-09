import { useState } from "react";
import FormNavigation from "../../components/EmissionForms/FormNavigation";
import FlightEmission from "../../components/EmissionForms/FlightEmission";
import ElectricityEmission from "../../components/EmissionForms/ElectricityEmission";
import VehicleEmission from "../../components/EmissionForms/VehicleEmission";
import PersonalForm from "../../components/EmissionForms/PersonalForm";
import EmissionsChart from "../../components/EmissionForms/EmissionsChart";
import "./CarbonFootprintCalculator.css";

const CarbonFootprintCalculator = () => {
  const [currentForm, setCurrentForm] = useState("personal");
  const [totalEmissions, setTotalEmissions] = useState(0);
  const [emissions, setEmissions] = useState({
    personal: 0,
    flight: 0,
    electricity: 0,
    vehicle: 0,
  });

  const handleFormData = (formType, emissionValue) => {
    setEmissions((prevEmissions) => ({
      ...prevEmissions,
      [formType]: parseFloat(emissionValue) || 0,
    }));
  };

  const calculateTotalEmissions = () => {
    const total = Object.values(emissions).reduce(
      (acc, emission) => acc + emission,
      0
    );
    setTotalEmissions(total);
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">Carbon Footprint Calculator</h1>
      <form className="main-form">
        <div>
          <FormNavigation
            setCurrentForm={setCurrentForm}
            currentForm={currentForm}
          />
        </div>
        <div className="form-fields">
          {currentForm === "personal" && (
            <PersonalForm
              onFormSubmit={(value) => handleFormData("personal", value)}
            />
          )}
          {currentForm === "flight" && (
            <FlightEmission
              onFormSubmit={(value) => handleFormData("flight", value)}
            />
          )}
          {currentForm === "electricity" && (
            <ElectricityEmission
              onFormSubmit={(value) => handleFormData("electricity", value)}
            />
          )}
          {currentForm === "vehicle" && (
            <VehicleEmission
              onFormSubmit={(value) => handleFormData("vehicle", value)}
            />
          )}
          {currentForm === "results" && (
            <EmissionsChart emissions={emissions} />
          )}
        </div>
        <button
          type="button"
          className="calculate-button"
          onClick={calculateTotalEmissions}
        >
          Calculate Total Emissions
        </button>
        {totalEmissions > 0 && (
          <p>Total CO2 Emissions: {totalEmissions.toFixed(2)} kg</p>
        )}
      </form>
    </div>
  );
};

export default CarbonFootprintCalculator;
