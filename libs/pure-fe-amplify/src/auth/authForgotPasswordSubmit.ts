import { Auth } from '@aws-amplify/auth';

const authForgotPasswordSubmit = async ({
  email,
  code,
  password,
}: {
  email: string;
  code: string;
  password: string;
}) => Auth.forgotPasswordSubmit(email, code, password);

export default authForgotPasswordSubmit;
