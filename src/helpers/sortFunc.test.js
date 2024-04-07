import { sortFunc } from "./sortFunc";

describe("should sort data by the given sorting category", () => {
  const mockData = [{ hotelName: "bravo" }, { hotelName: "alpha" }, { hotelName: "charlie" }];
  test("should sort data by name alphabetically a-z", () => {
    expect(sortFunc(mockData, "hotelName")).toEqual([
      { hotelName: "alpha" },
      { hotelName: "bravo" },
      { hotelName: "charlie" },
    ]);
  });
});
