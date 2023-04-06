import ourIsoToDisplayDateTime from './ourIsoToDisplayDateTime';

describe('ourIsoToDisplayDateTime', function () {
  test('formats properly', () => {
    const iso = '2022-07-08T13:27:59.123Z';
    const expected = 'Jul 8, 2022 6:27 AM';

    const result = ourIsoToDisplayDateTime(iso);

    expect(result).toBe(expected);
  });
});
