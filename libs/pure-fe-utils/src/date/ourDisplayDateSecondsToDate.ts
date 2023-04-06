import { isValid, parse } from 'date-fns';
import { dateFormat } from '../constants';

const ourDisplayDateSecondsToDate = (str: string) => {
  if (!str) return dateFormat.invalidDate;

  const date = parse(str, dateFormat.displayDateSeconds, new Date());

  return date && isValid(date) ? date : dateFormat.invalidDate;
};

export default ourDisplayDateSecondsToDate;
