import { format, isValid } from 'date-fns';
import ourStringToDate from './ourStringToDate';

const ourStringToMonthYear = (str: string) => {
  const date = ourStringToDate(str);

  return date && isValid(date) ? format(date, 'MMM yyyy') : 'Invalid Date';
};

export default ourStringToMonthYear;
