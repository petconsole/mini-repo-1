import ourIsoToMonthDayYear from './ourIsoToMonthDayYear';

describe('ourIsoToMonthDayYear', function () {
  test('formats properly', () => {
    const iso = '2022-07-08T13:27:59.123Z';
    const expected = '7/08/2022';

    const result = ourIsoToMonthDayYear(iso);

    expect(result).toBe(expected);
  });
});
