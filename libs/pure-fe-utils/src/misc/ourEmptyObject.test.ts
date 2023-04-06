import { ourEmptyObject } from './ourEmptyObject';

describe('ourEmptyObject', function () {
  test('handles null', () => {
    expect(ourEmptyObject(null)).toBe(false);
  });

  test('handles undefined', () => {
    expect(ourEmptyObject(undefined)).toBe(false);
  });

  test('handles 0', () => {
    expect(ourEmptyObject(0)).toBe(false);
  });

  test('handles empty string', () => {
    expect(ourEmptyObject('')).toBe(false);
  });

  test('handles empty array', () => {
    expect(ourEmptyObject([])).toBe(false);
  });

  test('handles non empty object', () => {
    expect(ourEmptyObject({ a: 1 })).toBe(false);
  });

  test('handles empty object', () => {
    expect(ourEmptyObject({})).toBe(true);
  });
});
