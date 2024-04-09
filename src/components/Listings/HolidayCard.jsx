import React from "react";
import { useState } from "react";
import { HolidayDetails } from "./HolidayDetails";
import { HolidayExpansion } from "./HolidayExpansion";

export const HolidayCard = ({ data, i }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`card ${expanded ? "expanded" : ""}`}>
      <img src={require(`../../assets/hotel-image-${i + 1}.png`)} alt='Card Image' className='card-image' />
      <HolidayDetails data={data} />
      <HolidayExpansion data={data} toggleExpand={toggleExpand} expanded={expanded} />
    </div>
  );
};
