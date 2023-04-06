import { isEqual, isValid } from 'date-fns';
import ourDisplayDateSecondsToDate from './ourDisplayDateSecondsToDate';

describe('ourDisplayDateSecondsToDate', function () {
  test('returns correct date', () => {
    const displayDateSeconds = 'Jul 8, 2022 6:27:59 AM';
    const expected = new Date(2022, 6, 8, 6, 27, 59);

    const result = ourDisplayDateSecondsToDate(displayDateSeconds);

    expect(isValid(result)).toBe(true);
    expect(result).toBeInstanceOf(Date);
    expect(typeof result === 'object' && isEqual(result, expected)).toBe(true);
  });
});
