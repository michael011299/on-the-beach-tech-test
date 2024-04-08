import React from "react";
import "./sorting.css";
import sortingInfo from "../../data/sortingInfo.json";

export const Sorting = ({ handleChange }) => {
  const sortingData = sortingInfo.sortingInfo;

  return (
    <div className='sorting'>
      {sortingData.map((sortMethod) => {
        return (
          <button className='sort-button' onClick={() => handleChange(sortMethod.sortValue)}>
            sort <strong>{sortMethod.label}</strong>
            <i
              id='sort-icons'
              class={`fa-solid ${sortMethod.icon}`}
              style={{ float: "right", fontSize: "large", marginRight: "5%", color: "#c7c7c7" }}
            ></i>
          </button>
        );
      })}
    </div>
  );
};
