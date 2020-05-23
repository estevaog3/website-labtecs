import React from "react";
import "./Number.css";

function Number({ label, min, max, value, handleChange }) {
  return (
    <div className="Number-container">
      <label>
        {label}
        <input
          type="number"
          required
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
