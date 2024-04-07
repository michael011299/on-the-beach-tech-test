export const sortFunc = (data, sortingValue) => {
  // sort by name

  if (sortingValue === "hotelName") {
    data.sort((a, b) => {
      const nameA = a.hotelName.toUpperCase();
      const nameB = b.hotelName.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
  return data;
};
