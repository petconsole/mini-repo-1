import ourMemberImageUrl from './ourMemberImageUrl';
import { Image } from '../types';

const ourAddMemberImageUrls = ({ images = [] }: { images: Image[] }) =>
  images.map((image) => ({
    ...image,
    src: ourMemberImageUrl(image.s3Key),
  }));

export default ourAddMemberImageUrls;
