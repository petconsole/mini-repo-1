import { format, isValid, parseISO } from 'date-fns';
import { dateFormat } from '../constants';

/**
 * Returns formatted like: "Thu Jul 7, 2022".
 */
const ourIsoToMonthDayYear = (str: string) => {
  const date = parseISO(str);

  return date && isValid(date) ? format(date, dateFormat.monthDayYear) : 'Invalid Date';
};

export default ourIsoToMonthDayYear;
