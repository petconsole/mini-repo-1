import { isEqual } from 'date-fns';
import ourDisplayDateToDate from './ourDisplayDateToDate';

describe('ourDisplayDateToDate', function () {
  test('returns correct date', () => {
    const displayDate = 'Jul 8, 2022';
    const expected = new Date(2022, 6, 8);

    const result = ourDisplayDateToDate(displayDate);

    // noinspection JSCheckFunctionSignatures
    expect(result instanceof Date && isEqual(result, expected)).toBe(true);
  });
});
