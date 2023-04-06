import { formatDistanceToNow, isValid, parseISO } from 'date-fns';

const ourIsoToAgo = (iso: string, suffix = true) => {
  const date = parseISO(iso);

  return date && isValid(date) ? formatDistanceToNow(date, { addSuffix: suffix }) : 'Invalid Date';
};

export default ourIsoToAgo;
