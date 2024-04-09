import React from "react";
import "./sorting.css";
import sortingInfo from "../../data/sortingInfo.json";
import { useState } from "react";

export const Sorting = ({ handleChange }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sortingData = sortingInfo.sortingInfo;

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='sorting'>
      {sortingData.map((sortMethod, i) => {
        return (
          <button
            className={`sorting__sort-button ${activeIndex === i ? "sorting__sort-button--active" : ""}`}
            onClick={() => (handleChange(sortMethod.sortValue), handleButtonClick(i))}
            key={i}
          >
            sort <strong>{sortMethod.label}</strong>
            <i
              className={`fa-solid ${sortMethod.icon}`}
              style={{ float: "right", fontSize: "large", marginRight: "5%", color: "#c7c7c7" }}
            ></i>
          </button>
        );
      })}
    </div>
  );
};
