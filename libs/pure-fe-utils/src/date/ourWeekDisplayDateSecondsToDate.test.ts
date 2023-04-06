import { isEqual } from 'date-fns';
import ourWeekDisplayDateSecondsToDate from './ourWeekDisplayDateSecondsToDate';

describe('ourWeekDisplayDateSecondsToDate', function () {
  test('returns correct date', () => {
    const weekDisplayDateSeconds = 'Thu Jul 8, 2022 6:27:59 AM';
    const expected = new Date(2022, 6, 8, 6, 27, 59);

    const result = ourWeekDisplayDateSecondsToDate(weekDisplayDateSeconds);

    // noinspection JSCheckFunctionSignatures
    expect(result instanceof Date && isEqual(result, expected)).toBe(true);
  });
});
