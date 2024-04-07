import { sortFunc } from "./sortFunc";

describe("should sort data by the given sorting category", () => {
  const mockData = [
    { hotelName: "bravo", starRating: 3 },
    { hotelName: "alpha", starRating: 1 },
    { hotelName: "charlie", starRating: 2 },
  ];
  test("should sort data by name alphabetically a-z", () => {
    expect(sortFunc(mockData, "hotelName")).toEqual([
      { hotelName: "alpha", starRating: 1 },
      { hotelName: "bravo", starRating: 3 },
      { hotelName: "charlie", starRating: 2 },
    ]);
  });
  test("should sort data by star rating high to low", () => {
    expect(sortFunc(mockData, "starRating")).toEqual([
      { hotelName: "bravo", starRating: 3 },
      { hotelName: "charlie", starRating: 2 },
      { hotelName: "alpha", starRating: 1 },
    ]);
  });
});
