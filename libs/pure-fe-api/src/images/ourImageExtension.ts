const ourImageExtension = ({ src }: { src: string }) => {
  if (src.startsWith('data:image/png')) return 'png';

  if (src.startsWith('data:image/jpeg')) return 'jpg';

  if (src?.startsWith('data:image/svg+xml')) return 'svg';

  return 'png';
};

export default ourImageExtension;
