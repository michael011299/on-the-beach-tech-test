import React from "react";
import Rating from "@mui/material/Rating";

export const HolidayDetails = ({ holidayData }) => {
  return (
    <div className='card-details'>
      <p className='card-details__title'>{holidayData.hotelName}</p>
      <p>{holidayData.location}</p>
      <Rating name='read-only' value={holidayData.starRating} readOnly />
      <br />
      <p style={{ display: "inline" }}>
        <strong>{holidayData.numOfPeople.adults} </strong> adults,{" "}
        {holidayData.numOfPeople.children > 0 ? (
          <span>
            <strong>{holidayData.numOfPeople.children} </strong>{" "}
            {holidayData.numOfPeople.children > 1 ? "children" : "child"}{" "}
          </span>
        ) : (
          ""
        )}
        {holidayData.numOfPeople.infants > 0 ? (
          <span>
            <strong>{holidayData.numOfPeople.infants} </strong> infant(s)
          </span>
        ) : (
          ""
        )}
      </p>
      <p>
        <strong>{holidayData.departureDate}</strong> for <strong>{holidayData.holidayDuration} days</strong>
      </p>
      <p>
        departing from <strong>{holidayData.departureLocation}</strong>
      </p>
      <button className='card-details__buy-button'>
        Book now <br /> £{holidayData.price}
      </button>
    </div>
  );
};
