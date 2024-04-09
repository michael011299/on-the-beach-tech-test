import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

describe("test sorting buttons", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("clicking the alphabetical sort button changes the order of package holidays to sort a-z", () => {
    const holidayOrder = screen.getAllByTestId("card-title");
    const sortAlphabetically = screen.getByText("alphabetically");
    fireEvent.click(sortAlphabetically);
    const textValues = holidayOrder.map((element) => element.textContent);

    expect(textValues).toEqual(["Aquamarina Golf Hotel", "Iberostar Grand Salome", "Las Piramides Resort"]);
  });

  test("clicking the star rating sort button changes the order of package holidays to sort a-z", () => {
    const holidayOrder = screen.getAllByTestId("card-title");
    const sortAlphabetically = screen.getByText("star rating");
    fireEvent.click(sortAlphabetically);
    const textValues = holidayOrder.map((element) => element.textContent);
    expect(textValues).toEqual(["Iberostar Grand Salome", "Las Piramides Resort", "Aquamarina Golf Hotel"]);
  });
});
