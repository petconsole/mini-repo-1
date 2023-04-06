import { endOfMonth, startOfMonth } from 'date-fns';
import ourMonthYears from './ourMonthYears';
import ourDateToMonthYear from './ourDateToMonthYear';

describe('ourMonthYears', function () {
  test('formats current date properly', () => {
    const expected = ourDateToMonthYear();

    const result = ourMonthYears();

    expect(result[0].monthYear).toBe(expected);
  });

  test('formats multiple months properly', () => {
    const startDate = new Date(2022, 0, 2); // Jan 2, 2022
    const endDate = new Date(2022, 2, 20); // Mar 20, 2022
    const expected = [
      {
        monthYear: ourDateToMonthYear(startDate),
        startAt: startOfMonth(startDate).toISOString(),
        endAt: endOfMonth(startDate).toISOString(),
      },
      {
        monthYear: ourDateToMonthYear(new Date(2022, 1, 2)), // Feb 2, 2022
      },
      {
        monthYear: ourDateToMonthYear(endDate),
        startAt: startOfMonth(endDate).toISOString(),
        endAt: endOfMonth(endDate).toISOString(),
      },
    ];

    const result = ourMonthYears(startDate, endDate);

    expect(result).toMatchObject(expected);
  });
});
