import ourPascalCase from './ourPascalCase';

describe('ourPascalCase', function () {
  test('converts properly', () => {
    const camelCase = 'camelCase';
    const pascalCase = 'CamelCase';

    const result = ourPascalCase(camelCase);

    expect(result).toBe(pascalCase);
  });
});
