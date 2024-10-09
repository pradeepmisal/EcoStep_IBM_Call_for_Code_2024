import React, { useState } from "react";
import "./FormStyles.css";

const PersonalForm = ({ onFormSubmit }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [diet, setDiet] = useState("");
  const [grocerySpending, setGrocerySpending] = useState("");
  const [clothesBought, setClothesBought] = useState("");
  const [emissions, setEmissions] = useState(null);

  const calculateEmissions = () => {
    let emissions = 0;

    if (weight) {
      emissions += weight * 0.1;
    }
    if (diet === "vegetarian") {
      emissions += 1.5 * 365;
    } else if (diet === "non-vegetarian") {
      emissions += 3.0 * 365;
    }
    if (grocerySpending) {
      emissions += grocerySpending * 0.5;
    }
    if (clothesBought) {
      emissions += clothesBought * 10;
    }

    return emissions;
  };

  const handleSubmit = () => {
    const emissions = calculateEmissions();
    setEmissions(emissions);
    onFormSubmit(emissions);
    setHeight("");
    setWeight("");
    setGender("");
    setDiet("");
    setGrocerySpending("");
    setClothesBought("");
  };

  return (
    <div className="form-container">
      <h2>Personal Information</h2>
      <div className="form-group">
        <label>Height (cm)</label>
        <input
          type="text"
          className="form-input"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Weight (kg)</label>
        <input
          type="text"
          className="form-input"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Gender</label>
        <select
          className="custom-select"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="" disabled>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label>Diet</label>
        <select
          className="custom-select"
          value={diet}
          onChange={(e) => setDiet(e.target.value)}
        >
          <option value="" disabled>
            Select Diet
          </option>
          <option value="vegetarian">Vegetarian</option>
          <option value="non-vegetarian">Non-Vegetarian</option>
        </select>
      </div>
      <div className="form-group">
        <label>Monthly Grocery Spending ($)</label>
        <input
          type="text"
          className="form-input"
          value={grocerySpending}
          onChange={(e) => setGrocerySpending(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Clothes Bought Monthly</label>
        <input
          type="text"
          className="form-input"
          value={clothesBought}
          onChange={(e) => setClothesBought(e.target.value)}
        />
      </div>
      <button type="button" className="calculate-button" onClick={handleSubmit}>
        Calculate Emission
      </button>

      {emissions !== null && (
        <div className="result-container">
          <p>Your calculated CO2 emissions: {emissions.toFixed(2)} kg</p>
        </div>
      )}
    </div>
  );
};

export default PersonalForm;
