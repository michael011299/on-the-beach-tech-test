export const sortFunc = (hotelData, sortingValue) => {
  // sort by name
  if (sortingValue === "hotelName") {
    hotelData.sort((a, b) => {
      const hotelNameA = a.hotelName.toUpperCase();
      const hotelNameB = b.hotelName.toUpperCase();
      if (hotelNameA < hotelNameB) {
        return -1;
      }
      if (hotelNameA > hotelNameB) {
        return 1;
      }
      return 0;
    });
  } else if (sortingValue === "starRating") {
    // star rating
    hotelData.sort((a, b) => b.starRating - a.starRating);
  }

  return hotelData;
};
