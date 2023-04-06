type namesType = { shortName?: string; longName?: string };

export interface OurGoogleAddressElementsProps {
  streetNumber?: namesType;
  street?: namesType;
  city?: namesType;
  province?: namesType;
  country?: namesType;
  postal?: namesType;
  neighborhood?: namesType;
  region?: namesType;
}

const ourGoogleAddressElements = (addressLocation: OurGoogleAddressElementsProps = {}) => {
  const {
    streetNumber: streetNumberObj = {},
    street: streetObj = {},
    city: cityObj = {},
    province: provObj = {},
    country: countryObj = {},
    postal: postalObj = {},
    neighborhood: neighborhoodObj = {},
    region: regionObj = {},
  } = addressLocation;

  return {
    ...addressLocation,
    streetNumber: streetNumberObj.shortName || streetNumberObj.longName,
    street: streetObj.shortName || streetObj.longName,
    city: cityObj.longName || cityObj.shortName,
    province: provObj.shortName || provObj.longName,
    country: countryObj.shortName || countryObj.longName,
    postal: postalObj.shortName || postalObj.longName,
    neighborhood: neighborhoodObj.shortName || neighborhoodObj.longName,
    region: regionObj.shortName || regionObj.longName,
  };
};

export default ourGoogleAddressElements;
