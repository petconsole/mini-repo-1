import { Auth } from '@aws-amplify/auth';

const authSignOut = async () => Auth.signOut();

export default authSignOut;
