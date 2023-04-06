import { Auth } from '@aws-amplify/auth';

const authForgotPassword = async ({ email }: { email: string }) => Auth.forgotPassword(email);

export default authForgotPassword;
