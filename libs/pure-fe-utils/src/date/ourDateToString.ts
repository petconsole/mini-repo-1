import { format, isValid } from 'date-fns';

const ourDateToString = (date: Date) => (date && isValid(date) ? format(date, 'yyyy-MM-dd') : null);

export default ourDateToString;
