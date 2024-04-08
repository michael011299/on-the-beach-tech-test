import React from "react";
import "./sorting.css";

export const Sorting = ({ handleChange }) => {
  return (
    <div className='sorting'>
      <button className='sort-button' onClick={() => handleChange("hotelName")}>
        sort <strong>alphabetically</strong>
        <i
          id='sort-icons'
          class='fa-solid fa-arrow-up-a-z'
          style={{ float: "right", fontSize: "large", marginRight: "5%", color: "#c7c7c7" }}
        ></i>
      </button>
      <button className='sort-button' onClick={() => handleChange("price")}>
        sort by <strong>price</strong>
        <i
          class='fa-solid fa-sterling-sign'
          style={{ float: "right", fontSize: "large", marginRight: "5%", color: "#c7c7c7" }}
        ></i>
      </button>
      <button className='sort-button' onClick={() => handleChange("starRating")}>
        sort by <strong>star rating</strong>
        <i
          class='fa-solid fa-star'
          style={{ float: "right", fontSize: "large", marginRight: "5%", color: "#c7c7c7" }}
        ></i>
      </button>
    </div>
  );
};
