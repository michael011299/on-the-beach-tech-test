import React from "react";

export const HolidayCardLeft = ({ trip, i }) => {
  return (
    <>
      <img src={require(`../../assets/hotel-image-${i + 1}.png`)} alt='hotel with pool' className='trip-image__image' />
      {/* <button className='trip_image-more-info' onClick={() => setExpandInfo(!expandInfo)}>
    Read more about this hotel
  </button> */}
    </>
  );
};
