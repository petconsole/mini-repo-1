import { Auth } from '@aws-amplify/auth';

const authSignUp = async ({ email, password }: { email: string; password: string }) =>
  Auth.signUp({ username: email, password });

export default authSignUp;
