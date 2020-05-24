import React from "react";
import "./Number.css";

function Number({ label, min, max, value, handleChange, isRequired }) {
  return (
    <div className="Number-container">
      <label>
        {`${label} ${isRequired ? "*" : ""}`}
        <input
          type="number"
          required={isRequired}
          value={value}
          onChange={handleChange}
          min={min}
          max={max}
        />
      </label>
    </div>
  );
}

export default Number;
