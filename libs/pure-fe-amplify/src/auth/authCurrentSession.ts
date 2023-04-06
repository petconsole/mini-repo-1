import { Auth } from '@aws-amplify/auth';

const authCurrentSession = async () => Auth.currentSession();

export default authCurrentSession;
