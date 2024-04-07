import { sortFunc } from "./sortFunc";

describe("should sort data by the given sorting category", () => {
  const mockData = [
    { hotelName: "bravo", starRating: 3, price: 550 },
    { hotelName: "alpha", starRating: 1, price: 696.8 },
    { hotelName: "charlie", starRating: 2, price: 1136.5 },
  ];
  test("should sort data by name alphabetically a-z", () => {
    expect(sortFunc(mockData, "hotelName")).toEqual([
      { hotelName: "alpha", starRating: 1, price: 696.8 },
      { hotelName: "bravo", starRating: 3, price: 550 },
      { hotelName: "charlie", starRating: 2, price: 1136.5 },
    ]);
  });
  test("should sort data by star rating high to low", () => {
    expect(sortFunc(mockData, "starRating")).toEqual([
      { hotelName: "bravo", starRating: 3, price: 550 },
      { hotelName: "charlie", starRating: 2, price: 1136.5 },
      { hotelName: "alpha", starRating: 1, price: 696.8 },
    ]);
  });
  test("should sort data by price low to high", () => {
    expect(sortFunc(mockData, "price")).toEqual([
      { hotelName: "bravo", starRating: 3, price: 550 },
      { hotelName: "alpha", starRating: 1, price: 696.8 },
      { hotelName: "charlie", starRating: 2, price: 1136.5 },
    ]);
  });
});
