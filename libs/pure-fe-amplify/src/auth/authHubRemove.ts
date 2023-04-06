import { Hub, HubCallback } from '@aws-amplify/core';

const authHubRemove = ({ listener }: { listener: HubCallback }) => Hub.remove('auth', listener);

export default authHubRemove;
