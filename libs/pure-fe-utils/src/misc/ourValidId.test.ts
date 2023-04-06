import ourValidId from './ourValidId';

describe('ourValidId', function () {
  test('handles valid id', () => {
    // noinspection SpellCheckingInspection
    const id = '01E6AJFQGJCB85P8DJG69RH6J8';
    const expected = true;

    const result = ourValidId(id);

    expect(result).toBe(expected);
  });

  test('handles invalid id', () => {
    // noinspection SpellCheckingInspection
    const id = '01I6AJFQGJCB85P8DJG69RH6J8';
    const expected = false; // I is not valid

    const result = ourValidId(id);

    expect(result).toBe(expected);
  });
});
