import ourIsoToWeekDisplayDateSeconds from './ourIsoToWeekDisplayDateSeconds';

describe('ourIsoToWeekDisplayDateSeconds', function () {
  test('formats properly', () => {
    const iso = '2022-07-08T13:27:59.123Z';
    const expected = 'Fri Jul 8, 2022 6:27:59 AM';

    const result = ourIsoToWeekDisplayDateSeconds(iso);

    expect(result).toBe(expected);
  });
});
