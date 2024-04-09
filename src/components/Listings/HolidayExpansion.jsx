import React from "react";

export const HolidayExpansion = ({ data, toggleExpand, expanded }) => {
  return (
    <div className='expand-container'>
      <button className='expand-btn' onClick={toggleExpand}>
        {expanded ? <strong>Read less </strong> : <strong>Read more</strong>} about this hotel
      </button>
      {expanded && (
        <div className='dropdown'>
          <h4>Overview</h4>
          <p>{data.hotelDescription}</p>
        </div>
      )}
    </div>
  );
};
