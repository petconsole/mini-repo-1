import { format, isValid } from 'date-fns';

const ourDateToMonthYear = (date = new Date()) =>
  date && isValid(date) ? format(date, 'MMM yyyy') : 'Invalid Date';

export default ourDateToMonthYear;
