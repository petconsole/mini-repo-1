import { format, isValid, parseISO } from 'date-fns';
import { dateFormat } from '../constants';

/**
 * Returns formatted like: "Jul 7, 2022 7:35:07 PM".
 */
const ourIsoToDisplayDateSeconds = (str: string) => {
  const date = parseISO(str);

  return date && isValid(date)
    ? format(date, dateFormat.displayDateSeconds)
    : dateFormat.invalidDate;
};

export default ourIsoToDisplayDateSeconds;
