const ourCamelCaseToWords = (str: string) => {
  if (!str) return '';

  // adding space between strings
  const spaced = str.replace(/([A-Z])/g, ' $1');

  // capitalize first character
  return `${spaced.charAt(0).toUpperCase()}${spaced.slice(1)}`;
};

export default ourCamelCaseToWords;
