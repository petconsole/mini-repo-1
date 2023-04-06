import { Auth } from '@aws-amplify/auth';

const authSignIn = async ({ email, password }: { email: string; password: string }) =>
  Auth.signIn(email, password);

export default authSignIn;
