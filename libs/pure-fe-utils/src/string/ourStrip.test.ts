import ourStrip from './ourStrip';

describe('ourStrip', function () {
  test('converts properly', () => {
    const spaces = ' I got   s p a c e s  ';
    // noinspection SpellCheckingInspection
    const noSpaces = 'Igotspaces';

    const result = ourStrip(spaces);

    expect(result).toBe(noSpaces);
  });
});
