import React from "react";

export const HolidayCardRight = ({ trip, i }) => {
  return (
    <>
      <p className='trip-details__hotel-name'>{trip.hotelName}</p>
      <p>{trip.location}</p>
      <p>{trip.starRating}</p>
      <p>
        <strong>{trip.departureDate} </strong> for <strong>{trip.holidayDuration}</strong> days
      </p>
      <p>
        departing from <strong>{trip.departureLocation}</strong>
      </p>
      <button className='trip-details__hotel-button'>
        Book now <p className='trip_price'>£{trip.price}</p>
      </button>
    </>
  );
};
