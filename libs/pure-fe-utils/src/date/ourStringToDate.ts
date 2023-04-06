import { parse } from 'date-fns';

const ourStringToDate = (str: string | null): Date | null =>
  str ? parse(str.substring(0, 10), 'yyyy-MM-dd', new Date()) : null;

export default ourStringToDate;
