import Auth from '@aws-amplify/auth';
import { Storage } from '@aws-amplify/storage';

export interface StorageGetProps {
  s3Key: string;
  config?: object;
}

export type StorageGetReturns = {
  $metadata: {
    httpStatusCode: number;
  };
  Body: string | Blob;
};

const storageGet = async ({
  s3Key,
  config,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
StorageGetProps): Promise<string | StorageGetReturns> => {
  // Seems we now need to get current credentials before a storage operation
  // https://docs.amplify.aws/lib/client-configuration/configuring-amplify-categories/q/platform/js/
  // Auth.currentCredentials seems to be undefined when this is called from pcl-our-api unit tests
  if (Auth?.currentCredentials) await Auth.currentCredentials();

  return Storage.get(s3Key, config);
};

export default storageGet;
