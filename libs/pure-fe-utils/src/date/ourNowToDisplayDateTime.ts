import { format } from 'date-fns';
import { dateFormat } from '../constants';

/**
 * Returns formatted like: "Jul 7, 2022 7:35 PM".
 */
const ourNowToDisplayDateTime = () => format(new Date(), dateFormat.displayDateTime);

export default ourNowToDisplayDateTime;
