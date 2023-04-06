import { PutResult, storagePut } from '@pure/pure-fe-amplify';
import ourImageContentType from './ourImageContentType';
import { OurPutImageProps } from '../types';

const ourPutImage = async ({
  s3Key,
  src,
  acl = 'public-read',
  contentType,
  log,
}: OurPutImageProps) => {
  const image = Buffer.from(src.split(',')[1], 'base64');

  try {
    return <PutResult>await storagePut({
      s3Key,
      data: image,
      config: { acl, contentType: contentType || ourImageContentType({ src }) },
    });
  } catch (e) {
    await log(`ourPutImage error on ${s3Key}:`, e);

    return null;
  }
};

export default ourPutImage;
