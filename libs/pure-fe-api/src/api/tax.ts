import { defaultMethods, fullPath, get, pathParam } from './common';

const apiPath = '/taxes';

export const Tax = {
  ...defaultMethods(apiPath),
  getTaxByCountryAndProvince: async (country: string, province: string) =>
    await get(
      fullPath(
        `${apiPath}/getBy`,
        `${pathParam('country', country)}${pathParam('province', province)}`,
      ),
    ),
};
