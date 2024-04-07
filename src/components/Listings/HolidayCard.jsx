import React from "react";
import holidays from "../../data/hotels.json";
import { HolidayCardLeft } from "./HolidayCardLeft";
import { HolidayCardRight } from "./HolidayCardRight";
import "./holidaycard.css";

export const HolidayCard = () => {
  const trips = holidays.hotels;

  return trips.map((trip, i) => (
    <div className='trip_card' key={i}>
      <div className='trip_image'>
        <HolidayCardLeft trip={trip} i={i} />
      </div>
      <div className='trip_details'>
        <HolidayCardRight trip={trip} i={i} />
      </div>
    </div>
  ));
};
