import "./holidaycard.css";
import { Holiday } from "./Holiday";

export const HolidayCard = ({ packageHolidays }) => {
  const trips = packageHolidays;

  return trips.map((data, i) => <Holiday data={data} i={i} key={i} />);
};
