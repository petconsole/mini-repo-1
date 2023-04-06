import authCurrentAuthenticatedUser from './authCurrentAuthenticatedUser';
import authCurrentSession from './authCurrentSession';
import authSignOut from './authSignOut';

interface AuthCheckProps {
  event: string;
  isMember: () => Promise<boolean>;
  createMember: ({ email }: { email: string }) => Promise<boolean>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logger: (...args: any) => Promise<Error> | Error;
}

const authCheck: ({
  event,
  isMember,
  createMember,
  logger,
}: AuthCheckProps) => Promise<void> = async ({
  event = '',
  isMember,
  createMember,
  logger,
}: AuthCheckProps) => {
  let user = null;
  let member = null;
  let action = 'getting';

  try {
    // Do we have an authenticated user already?
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    user = await authCurrentAuthenticatedUser({});

    // Not sure if this really needed? Keeps refresh up to date?
    await authCurrentSession();

    // If the user has been authenticated, are they a member?
    try {
      // 1st try to check if member
      if (user) member = await isMember();
    } catch (e) {
      const message = e instanceof Error ? e.message : 'unknown error';

      await logger(`authCheck isMember error: ${message}. Will retry.`);

      // Retry once:
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      user = await authCurrentAuthenticatedUser({});

      await authCurrentSession();

      if (user) member = await isMember();
    }

    // If we are authenticated, but not a member, create a new member
    if (user && !member && event === 'signIn') {
      action = 'creating';
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
      await createMember({ email: user.attributes.email });
    }
  } catch (e) {
    if (!user) {
      // It's normally ok if we don't have an authenticated user, but we need to ensure they are
      // not incorrectly assumed to be authenticated, so reset the profile state
      if (e !== 'No current user' && typeof e === 'string' && !e.includes('not authenticated'))
        await logger(`authCheck caught unexpected error: ${e}.`);
      // if (e === 'No current user' || e.includes('not authenticated'))
      //   await dispatch(resetProfileState({}));
      // else await log(`authCheck caught unexpected error: ${e}.`);
    } else {
      const message = e instanceof Error ? e.message : 'unknown error';

      await logger(`authCheck Error ${action} member: ${message}`);
      await authSignOut();
    }
  }
};

export default authCheck;
