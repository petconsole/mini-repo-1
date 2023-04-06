import ourPutImage from './ourPutImage';
import { OurPutImagesProps } from "../types";

const ourPutImages = async ({ images, log }: OurPutImagesProps) => {
  if (!images.length) return images;

  return await Promise.all(
    images.map(({ s3Key, src, acl = 'public-read', contentType }) =>
      ourPutImage({ s3Key, src, acl, contentType, log }),
    ),
  );
};

export default ourPutImages;
