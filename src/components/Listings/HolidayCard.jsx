import React from "react";
import { useState } from "react";
import { HolidayDetails } from "./HolidayDetails";
import { HolidayExpansion } from "./HolidayExpansion";

export const HolidayCard = ({ holidayData, i }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`card ${expanded ? "expanded" : ""}`}>
      <img src={require(`../../assets/hotel-image-${i + 1}.png`)} alt='hotel and pool' className='card-image' />
      <HolidayDetails holidayData={holidayData} />
      <HolidayExpansion holidayData={holidayData} toggleExpand={toggleExpand} expanded={expanded} />
    </div>
  );
};
