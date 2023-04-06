import authCurrentAuthenticatedUser from './authCurrentAuthenticatedUser';
import authProviders from './authProviders';

interface AuthGetProviderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logger: (...args: any) => Promise<Error> | Error;
}

const authGetProvider = async ({ logger }: AuthGetProviderProps) => {
  let provider: string | null = null;

  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const user = await authCurrentAuthenticatedUser({});

    const providers = Object.values(authProviders).map((value) => value.toLowerCase());

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
    const { identities } = user?.attributes || {};

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-assignment
    provider = identities ? JSON.parse(identities)[0].providerName : authProviders.email;

    if (!providers.find((value) => value === provider?.toLowerCase())) {
      await logger(`authGetProvider unexpected provider: ${provider || ''}.`);

      provider = null;
    }
  } catch (e) {
    if (e !== 'No current user' && typeof e === 'string' && !e.includes('not authenticated'))
      await logger(`authGetProvider caught unexpected error: ${e}.`);
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return provider;
};

export default authGetProvider;
