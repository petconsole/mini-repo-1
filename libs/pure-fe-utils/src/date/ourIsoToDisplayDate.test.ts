import ourIsoToDisplayDate from './ourIsoToDisplayDate';

describe('ourIsoToDisplayDate', function () {
  test('formats properly', () => {
    const iso = '2022-07-08T13:27:59.123Z';
    const expected = 'Jul 8, 2022';

    const result = ourIsoToDisplayDate(iso);

    expect(result).toBe(expected);
  });
});
