import { differenceInYears, isValid } from 'date-fns';

const ourDateToAge = (date: Date | null) =>
  date && isValid(date) ? differenceInYears(new Date(), date) : 0;

export default ourDateToAge;
