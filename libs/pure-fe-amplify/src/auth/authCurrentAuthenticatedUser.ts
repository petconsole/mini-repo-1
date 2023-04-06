import { Auth } from '@aws-amplify/auth';

const authCurrentAuthenticatedUser = async ({ bypassCache = true }) =>
  Auth.currentAuthenticatedUser({ bypassCache });

export default authCurrentAuthenticatedUser;
