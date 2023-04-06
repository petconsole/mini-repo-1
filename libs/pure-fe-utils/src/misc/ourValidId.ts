import { ourUlidRegex } from '../constants';

const ourValidId = (id: string) => ourUlidRegex.test(id);

export default ourValidId;
