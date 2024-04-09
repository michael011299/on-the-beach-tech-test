import "./App.css";
import { Sorting } from "./components/Sorting/Sorting";
import hotels from "./data/hotels.json";
import { Holiday } from "./components/Listings/Holiday";
import { useState } from "react";
import { sortFunc } from "./helpers/sortFunc";

const App = () => {
  const trips = hotels.hotels;
  const [packageHolidays, setPackageHolidays] = useState(trips);
  const [holdiaySort, setHolidaySort] = useState();

  const handleChange = (newSortBy) => {
    setHolidaySort(newSortBy);
    setPackageHolidays(sortFunc(trips, newSortBy));
  };

  return (
    <div className='App'>
      <Sorting handleChange={handleChange} />
      <Holiday packageHolidays={packageHolidays} />
    </div>
  );
};

export default App;
