import React from "react";
import Rating from "@mui/material/Rating";

export const HolidayDetails = ({ data }) => {
  return (
    <div className='card-details'>
      <p className='card-details__title'>{data.hotelName}</p>
      <p>{data.location}</p>
      <Rating name='read-only' value={data.starRating} readOnly />
      <br />
      <p style={{ display: "inline" }}>
        <strong>{data.numOfPeople.adults} </strong> adults,{" "}
        {data.numOfPeople.children > 0 ? (
          <span>
            <strong>{data.numOfPeople.children} </strong> {data.numOfPeople.children > 1 ? "children" : "child"}{" "}
          </span>
        ) : (
          ""
        )}
        {data.numOfPeople.infants > 0 ? (
          <span>
            <strong>{data.numOfPeople.infants} </strong> infant(s)
          </span>
        ) : (
          ""
        )}
      </p>
      <p>
        <strong>{data.departureDate}</strong> for <strong>{data.holidayDuration} days</strong>
      </p>
      <p>
        departing from <strong>{data.departureLocation}</strong>
      </p>
      <button className='card-details__buy-button'>
        Book now <br /> £{data.price}
      </button>
    </div>
  );
};
