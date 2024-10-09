import React from "react";
import "./FormStyles.css";

const FormNavigation = ({ setCurrentForm, currentForm }) => {
  return (
    <div className="navigation">
      {["personal", "flight", "electricity", "vehicle"].map((form) => (
        <button
          key={form}
          type="button"
          className={currentForm === form ? "active" : ""}
          onClick={() => setCurrentForm(form)}
        >
          {form.charAt(0).toUpperCase() + form.slice(1)}
        </button>
      ))}
      <button
        type="button"
        className={currentForm === "results" ? "active" : ""}
        onClick={() => setCurrentForm("results")}
      >
        Results
      </button>
    </div>
  );
};

export default FormNavigation;
