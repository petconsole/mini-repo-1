import { ourMemberImagePath } from '../constants';

const ourMemberImageUrl = (image?: string, isPrivate?: boolean) => {
  if (!image) return image;

  return image.startsWith('http')
    ? image
    : `${ourMemberImagePath}/${isPrivate ? 'private' : 'public'}/${image}`;
};

export default ourMemberImageUrl;
