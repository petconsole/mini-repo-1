// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ourPickProperties = (item: { [index: string]: any }, propertyNames: string[]) => {
  return propertyNames.reduce((result, propertyName) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    return { ...result, [propertyName]: item[propertyName] };
  }, {});
};

export default ourPickProperties;
