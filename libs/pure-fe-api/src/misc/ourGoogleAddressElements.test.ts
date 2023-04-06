import ourGoogleAddressElements from './ourGoogleAddressElements';
import { RecordType } from '../types';

describe('ourGoogleAddressElements', function () {
  test('returns expected result', () => {
    const address = {
      streetNumber: { shortName: '1', longName: 'one' },
      street: { shortName: '2' },
      city: { longName: 'three' },
      province: { shortName: '4' },
      country: { longName: 'five' },
      postal: { shortName: '6' },
      neighborhood: { longName: 'seven' },
      region: { shortName: '8', longName: 'eight' },
    };
    const expected = {
      streetNumber: address.streetNumber.shortName,
      street: address.street.shortName,
      city: address.city.longName,
      province: address.province.shortName,
      country: address.country.longName,
      postal: address.postal.shortName,
      neighborhood: address.neighborhood.longName,
      region: address.region.shortName,
    };

    const result = ourGoogleAddressElements(address);

    expect(result).toStrictEqual(expected);
  });

  test('returns undefined properties when input is undefined', () => {
    const result = ourGoogleAddressElements(undefined);

    expect(typeof result).toBe('object');
    expect(result.city).toBeUndefined();
  });

  test('returns unexpected properties', () => {
    const unexpected = <RecordType>{ a: 1 };
    const result = <RecordType>ourGoogleAddressElements(unexpected);

    expect(typeof result).toBe('object');
    expect(result.a).toBe(unexpected.a);
  });
});
