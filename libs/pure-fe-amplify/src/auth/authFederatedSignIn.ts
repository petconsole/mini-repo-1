import { Auth } from '@aws-amplify/auth';

const authFederatedSignIn = ({
  customState,
  customProvider,
}: {
  customProvider: string;
  customState?: string;
}) => Auth.federatedSignIn({ ...(customState && { customState }), customProvider });

export default authFederatedSignIn;
