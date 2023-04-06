import ourIsoToWeekDisplayDate from './ourIsoToWeekDisplayDate';

describe('ourIsoToWeekDisplayDate', function () {
  test('formats properly', () => {
    const iso = '2022-07-08T13:27:59.123Z';
    const expected = 'Fri Jul 8, 2022';

    const result = ourIsoToWeekDisplayDate(iso);

    expect(result).toBe(expected);
  });
});
