import React from "react";
import { useState } from "react";
import Rating from "@mui/material/Rating";

export const Holiday = ({ data, i }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`card ${expanded ? "expanded" : ""}`}>
      <img src={require(`../../assets/hotel-image-${i + 1}.png`)} alt='Card Image' className='card-image' />
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
    </div>
  );
};
