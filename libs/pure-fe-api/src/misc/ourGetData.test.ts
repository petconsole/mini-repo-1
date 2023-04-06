import ourGetData from './ourGetData';
import { RecordType } from '../types';

describe('ourGetData', function () {
  test('calls endpoint method as expected', async () => {
    const endpoint = async (a: number, b: RecordType, c: string) => ({
      items: [{ a, b: b.two, c: Number(c) }],
    });
    const params = [1, { two: 2 }, '3'];
    const expected = { a: 1, b: 2, c: 3 };

    const result = await ourGetData(endpoint, params);

    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toStrictEqual(expected);
  });
});
