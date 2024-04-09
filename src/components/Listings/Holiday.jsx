import "./holidaycard.css";
import { HolidayCard } from "./HolidayCard";

export const Holiday = ({ packageHolidays }) => {
  const trips = packageHolidays;

  return trips.map((holidayData, i) => <HolidayCard holidayData={holidayData} i={i} />);
};
