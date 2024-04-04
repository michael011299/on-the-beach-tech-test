import React from "react";
import { useState } from "react";
import holidays from "../../data/hotels.json";
import "./listings.css";

export const Listings = () => {
  const trips = holidays.hotels;
  const [expandInfo, setExpandInfo] = useState(true);

  return trips.map((trip) => (
    <div className='trip_card' key={trip.hotelName}>
      <div className='trip_image'>
        <img src={trip.hotelImage} alt='hotel with pool'></img>
        <button className='trip_image-more-info' onClick={() => setExpandInfo(!expandInfo)}>
          Read more about this hotel
        </button>
      </div>
      <div className='trip_details'>
        <h1 className='hotel_name'>{trip.hotelName}</h1>
        <p>{trip.location}</p>
        <p>{trip.starRating}</p>
        <p>
          <strong>{trip.departureDate} </strong> for <strong>{trip.holidayDuration}</strong> days
        </p>
        <p>
          departing from <strong>{trip.departureLocation}</strong>
        </p>
        <button className='hotel_button'>
          Book now <p className='trip_price'>£{trip.price}</p>
        </button>
      </div>
    </div>
  ));
};
