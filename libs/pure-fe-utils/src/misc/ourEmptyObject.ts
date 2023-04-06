export const ourEmptyObject = (obj: unknown) => {
  if (!obj) return false;

  return Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype;
};
