import ourArrayToEntries from './ourArrayToEntries';

describe('arrayToEntries', function () {
  test('converts properly', () => {
    const data = ['a', 'b', 'c'];
    const expected = { a: 'a', b: 'b', c: 'c' };

    const result = ourArrayToEntries(data);

    expect(result).toStrictEqual(expected);
  });
});
