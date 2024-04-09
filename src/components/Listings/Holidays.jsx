import "./holidaycard.css";
import { Holiday } from "./HolidayCard";

export const Holiday = ({ packageHolidays }) => {
  const trips = packageHolidays;

  return trips.map((data, i) => <Holiday data={data} i={i} key={i} />);
};
