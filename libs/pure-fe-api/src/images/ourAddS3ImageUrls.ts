import ourS3ImageUrl from './ourS3ImageUrl';
import { Image } from '../types';

const ourAddS3ImageUrls = ({ images = [] }: { images: Image[] }) =>
  images.map((image) => ({
    ...image,
    src: ourS3ImageUrl({ s3Key: image.s3Key }),
  }));

export default ourAddS3ImageUrls;
