export interface OurLocationToCityProps {
  city: string;
  province: string;
  country: string;
}

const ourLocationToCity = (location: OurLocationToCityProps) => {
  const { city, province, country } = location || {};

  return [city, province, country].filter((x) => !!x).join(', ');
};

export default ourLocationToCity;
