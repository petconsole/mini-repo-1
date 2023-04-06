import { format, isValid, parseISO } from 'date-fns';
import { dateFormat } from '../constants';

/**
 * Returns formatted like: "Jul 7, 2022".
 */
const ourIsoToDisplayDate = (str: string) => {
  const date = parseISO(str);

  return date && isValid(date) ? format(date, dateFormat.displayDate) : 'Invalid Date';
};

export default ourIsoToDisplayDate;
