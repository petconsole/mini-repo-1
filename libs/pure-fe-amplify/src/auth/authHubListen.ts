import { Hub, HubCallback } from '@aws-amplify/core';

const authHubListen = ({ listener }: { listener: HubCallback }) => Hub.listen('auth', listener);

export default authHubListen;
