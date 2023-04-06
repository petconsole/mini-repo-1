const ourArrayToEntries = (arr: string[]) =>
  arr.reduce((obj, prop) => ({ ...obj, [prop]: prop }), {});

export default ourArrayToEntries;
