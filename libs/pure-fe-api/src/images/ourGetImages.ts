import ourGetImage from './ourGetImage';
import { Image } from '../types';

interface ourGetImagesProps {
  images: Image[];
  log: (...args: unknown[]) => Promise<Error>;
}

const ourGetImages = ({ images = [], log }: ourGetImagesProps) =>
  Promise.all(
    images.map((image) =>
      ourGetImage({ s3Key: image.s3Key, log })
        .then((src) => ({ ...image, src }))
        .catch((e) => {
          log(`ourGetImages error on ${image.s3Key}:`, e).then();

          return { ...image, src: '' };
        }),
    ),
  );

export default ourGetImages;
