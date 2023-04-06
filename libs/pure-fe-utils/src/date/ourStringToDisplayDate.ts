import { format, isValid } from 'date-fns';
import ourStringToDate from './ourStringToDate';
import { dateFormat } from '../constants';

const ourStringToDisplayDate = (str: string | null) => {
  const date = ourStringToDate(str);

  return date && isValid(date) ? format(date, dateFormat.displayDate) : 'Invalid Date';
};

export default ourStringToDisplayDate;
