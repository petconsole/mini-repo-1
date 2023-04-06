import { format, isValid, parseISO } from 'date-fns';
import { dateFormat } from '../constants';

/**
 * Returns formatted like: "Jul 7, 2022 7:35 PM".
 */
const ourIsoToDisplayDateTime = (str: string) => {
  const date = parseISO(str);

  return date && isValid(date) ? format(date, dateFormat.displayDateTime) : 'Invalid Date';
};

export default ourIsoToDisplayDateTime;
