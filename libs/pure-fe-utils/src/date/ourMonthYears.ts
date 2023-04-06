import { add, endOfMonth, isBefore, startOfMonth } from 'date-fns';
import ourDateToMonthYear from './ourDateToMonthYear';

const ourMonthYears = (startDate = new Date(), endDate = new Date()) => {
  const months = [];
  let day = startDate || new Date();

  do {
    months.push({
      monthYear: ourDateToMonthYear(day),
      startAt: startOfMonth(day).toISOString(),
      endAt: endOfMonth(day).toISOString(),
    });

    day = add(endOfMonth(day), { days: 1 });
  } while (isBefore(day, endDate));

  return months;
};

export default ourMonthYears;
