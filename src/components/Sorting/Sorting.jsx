import React from "react";
import "./sorting.css";

export const Sorting = ({ handleChange }) => {
  return (
    <div>
      <button onClick={() => handleChange("hotelName")}>Alphabetically</button>
      <button onClick={() => handleChange("price")}>price</button>
      <button onClick={() => handleChange("starRating")}>star rating</button>
    </div>
  );
};
