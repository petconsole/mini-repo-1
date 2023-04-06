import ourStringToDisplayDate from './ourStringToDisplayDate';

describe('ourStringToDisplayDate', function () {
  test('formats properly', () => {
    const iso = '2022-07-08';
    const expected = 'Jul 8, 2022';

    const result = ourStringToDisplayDate(iso);

    expect(result).toBe(expected);
  });
});
