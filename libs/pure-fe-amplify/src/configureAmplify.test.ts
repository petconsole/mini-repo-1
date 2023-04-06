import configureAmplify from './configureAmplify';

describe('configureAmplify', function tests() {
  test('configures properly', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: any = configureAmplify();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { Auth } = result || {};

    expect(typeof result).toBe('object');
    expect(typeof Auth).toBe('object');
  });
});
