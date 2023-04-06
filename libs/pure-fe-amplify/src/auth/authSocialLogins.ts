import authFederatedSignIn from './authFederatedSignIn';

const authSocialLogins = {
  google: ({ customState }: { customState: string }) =>
    authFederatedSignIn({ customState, customProvider: 'Google' }),
  facebook: ({ customState }: { customState: string }) =>
    authFederatedSignIn({ customState, customProvider: 'Facebook' }),
  amazon: ({ customState }: { customState: string }) =>
    authFederatedSignIn({ customState, customProvider: 'LoginWithAmazon' }),
};

export default authSocialLogins;
