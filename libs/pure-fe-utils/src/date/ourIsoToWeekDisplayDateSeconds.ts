import { format, isValid, parseISO } from 'date-fns';
import { dateFormat } from '../constants';

/**
 * Returns formatted like: "Thu Jul 7, 2022 7:35:23 PM".
 */
const ourIsoToWeekDisplayDateSeconds = (str: string) => {
  const date = parseISO(str);

  return date && isValid(date)
    ? format(date, dateFormat.weekdayAndDisplayDateSeconds)
    : dateFormat.invalidDate;
};

export default ourIsoToWeekDisplayDateSeconds;
