import React from "react";
import "./sorting.css";
import sortingInfo from "../../data/sortingInfo.json";

export const Sorting = ({ handleChange }) => {
  const sortingData = sortingInfo.sortingInfo;

  return (
    <div className='sorting'>
      {sortingData.map((sortMethod, i) => {
        return (
          <button className='sorting__sort-button' onClick={() => handleChange(sortMethod.sortValue)} key={i}>
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
