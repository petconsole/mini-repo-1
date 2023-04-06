import configureAmplify from '../configureAmplify';
import authSignIn from './authSignIn';

describe('authSignIn', function tests() {
  beforeAll(configureAmplify);

  test('signs in properly', async () => {
    const email = 'blackbeltwilbur@gmail.com';

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result = await authSignIn({ email, password: '1Password!' });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { attributes } = result || {};

    expect(typeof result).toBe('object');
    expect(typeof attributes).toBe('object');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(attributes.email).toBe(email);
  });

  test('throws on invalid username or password', async () => {
    await expect(authSignIn({ email: 'any@gmail.com', password: 'word!' })).rejects.toThrow(
      /Incorrect username or password/,
    );
  });
});
