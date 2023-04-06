import ourIsoToWeekDisplayDateTime from './ourIsoToWeekDisplayDateTime';

describe('ourIsoToWeekDisplayDateTime', function () {
  test('formats properly', () => {
    const iso = '2022-07-08T13:27:59.123Z';
    const expected = 'Fri Jul 8, 2022 6:27 AM';

    const result = ourIsoToWeekDisplayDateTime(iso);

    expect(result).toBe(expected);
  });
});
