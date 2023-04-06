import { storageGet } from '@pure/pure-fe-amplify';
import { ourBlobToDataUrl } from '../misc';
import { RecordType } from '../types';

interface ourGetImageProps {
  s3Key: string;
  log: (...args: unknown[]) => Promise<Error>;
  config?: RecordType;
}

// download: true returns object data rather than pre-signed URL
const ourGetImage = async ({ s3Key, log, config = { download: true } }: ourGetImageProps) => {
  if (!s3Key) return null;

  return storageGet({ s3Key, config })
    .then((storageResult) => {
      if (typeof storageResult !== 'object') return storageResult;

      const { Body } = storageResult;

      if (typeof Body === 'string') return Body;

      return ourBlobToDataUrl({ blob: Body, log });
    })
    .catch((e) => {
      log(`ourGetImage error on ${s3Key}:`, e);

      return null;
    });
};

export default ourGetImage;
