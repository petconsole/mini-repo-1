import { isValid, parse } from 'date-fns';
import { dateFormat } from '../constants';

const ourWeekDisplayDateSecondsToDate = (str: string) => {
  if (!str) return dateFormat.invalidDate;

  const date = parse(str.substring(4), dateFormat.displayDateSeconds, new Date());

  return date && isValid(date) ? date : dateFormat.invalidDate;
};

export default ourWeekDisplayDateSecondsToDate;
