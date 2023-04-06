import ourDateToMonthYear from './ourDateToMonthYear';

describe('ourDateToMonthYear', function () {
  test('formats properly', () => {
    // Month is a zero based index
    const date = new Date(2022, 6, 3);
    const expected = 'Jul 2022';

    const result = ourDateToMonthYear(date);

    expect(result).toBe(expected);
  });
});
