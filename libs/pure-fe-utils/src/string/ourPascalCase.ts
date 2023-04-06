const ourPascalCase = (str: string) =>
  str
    .replace(/(\w)(\w*)/g, (g0, g1: string, g2: string) => `${g1.toUpperCase()}${g2}`)
    .replace(/\s/g, '');

export default ourPascalCase;
