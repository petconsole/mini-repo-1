import { Auth } from '@aws-amplify/auth';

const authConfirmSignUp = async ({ email, code }: { email: string; code: string }) =>
  Auth.confirmSignUp(email, code);

export default authConfirmSignUp;
