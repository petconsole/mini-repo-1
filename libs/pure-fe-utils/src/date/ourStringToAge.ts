import ourDateToAge from './ourDateToAge';
import ourStringToDate from './ourStringToDate';

const ourStringToAge = (str: string | null) => (str ? ourDateToAge(ourStringToDate(str)) : '');

export default ourStringToAge;
