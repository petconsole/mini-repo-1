import { Auth } from '@aws-amplify/auth';

const authResendSignUp = async ({ email }: { email: string }) => Auth.resendSignUp(email);

export default authResendSignUp;
