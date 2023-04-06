import { format, isValid, parseISO } from 'date-fns';
import { dateFormat } from '../constants';

/**
 * Returns formatted like: "Thu Jul 7, 2022".
 */
const ourIsoToWeekDisplayDate = (str: string) => {
  const date = parseISO(str);

  return date && isValid(date) ? format(date, dateFormat.weekdayAndDisplayDate) : 'Invalid Date';
};

export default ourIsoToWeekDisplayDate;
