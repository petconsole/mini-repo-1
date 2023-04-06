import authCheck from './authCheck';

interface AuthEventHandlerProps {
  isMember: () => Promise<boolean>;
  createMember: ({ email }: { email: string }) => Promise<boolean>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  redirect: ({ data }: { data?: any }) => Promise<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logger: (...args: any) => Promise<Error> | Error;
}

const authEventHandler =
  ({ isMember, createMember, redirect, logger }: AuthEventHandlerProps) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ({ payload: { event, data } }: { payload: { event: string; data: any } }) => {
    // We'll ignore most auth events. We do need to know when the member signs in and out.
    switch (event) {
      case 'signIn':
      case 'signOut':
      case 'oAuthSignOut':
        authCheck({ event, isMember, createMember, logger }).catch(() => { return });
        break;
      case 'customOAuthState':
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        redirect({ data }).catch(() => { return });
        break;
      case 'confirmSignUp': // Ignore these for now - 2022-09-08
      case 'customState_failure': // Ignore these for now - 2022-01-22
      case 'cognitoHostedUI': // Ignore these for now
      case 'cognitoHostedUI_failure': // Ignore these for now - 2022-01-22
      case 'forgotPassword': // Ignore these for now
      case 'forgotPasswordSubmit': // Ignore these for now
      case 'signIn_failure': // Ignore these for now
      case 'signUp': // Ignore these for now
      case 'signUp_failure': // Ignore these for now
      case 'tokenRefresh': // Ignore these for now
      case 'tokenRefresh_failure': // Ignore these for now - refresh token expired
      case 'forgotPasswordSubmit_failure': // Ignore these for now
        break;
      default:
        // eslint-disable-next-line
        logger(`A new auth event (${event}) has happened: `, data);
    }
  };

export default authEventHandler;
