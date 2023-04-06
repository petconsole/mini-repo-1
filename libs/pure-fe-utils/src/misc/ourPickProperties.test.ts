import { ourPickProperties } from './index';

describe('ourValidId', function () {
  test('returns existing properties', () => {
    const object = { a: 1, b: '2', c: { three: 3 }, d: [1, 2, 3], e: null };
    const { a, c, e } = object;

    const result = ourPickProperties(object, ['a', 'c', 'e']);

    expect(result).toStrictEqual({ a, c, e });
  });
});
