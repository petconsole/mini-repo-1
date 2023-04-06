import { ourNewId } from "@pure/pure-fe-utils";
import ourImageKey from './ourImageKey';

describe('ourImageKey', function tests() {
  const id = ourNewId();

  test('returns expected results',  () => {
    const src = 'any-src';
    const blogRegex = /^blog\/image\/blog-[0-9A-Z]{26}-[0-9A-Z]{26}-image\.png$/

    expect(ourImageKey.blog({ id, src })).toMatch(blogRegex);
  });
});
