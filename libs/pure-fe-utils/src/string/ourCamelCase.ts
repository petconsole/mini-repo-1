const ourCamelCase = (str: string) =>
  str
    .replace(/(\w)(\w*)/g, (g0, g1: string, g2: string) => `${g1.toLowerCase()}${g2}`)
    .replace(/\s/g, '');

export default ourCamelCase;
