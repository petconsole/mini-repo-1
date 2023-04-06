const ourImageContentType = ({ src }: { src: string }) => {
  if (src?.startsWith('data:image/png')) return 'image/png';

  if (src?.startsWith('data:image/jpeg')) return 'image/jpeg';

  if (src?.startsWith('data:image/svg+xml')) return 'image/svg+xml';

  return 'image/png';
};

export default ourImageContentType;
