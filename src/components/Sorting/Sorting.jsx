import React from "react";
import "./sorting.css";

export const Sorting = () => {
  const sortingMethods = ["alphabetically", "price", "star rating"];

  return (
    <div className='sorting'>
      {sortingMethods.map((sortBy) => {
        <div className='sort-card'>
          <p>sort {sortBy}</p>
        </div>;
      })}
    </div>
  );
};
