import { Storage } from '@aws-amplify/storage';

export type PutResult = {
  key: string;
};

export interface StoragePutProps {
  s3Key: string;
  data: string | Buffer;
  config?: object;
}

export type StoragePut = (props: StoragePutProps) => Promise<PutResult>;

const storagePut = async ({ s3Key, data, config }: StoragePutProps) =>
  Storage.put(s3Key, data, config);

export default storagePut;
