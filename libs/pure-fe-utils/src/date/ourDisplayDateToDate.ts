import { isValid, parse } from 'date-fns';
import { dateFormat } from '../constants';

const ourDisplayDateToDate = (str: string) => {
  if (!str) return dateFormat.invalidDate;

  const date = parse(str, dateFormat.displayDate, new Date());

  return date && isValid(date) ? date : dateFormat.invalidDate;
};

export default ourDisplayDateToDate;
