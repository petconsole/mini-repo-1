import { fullPath, get, pathParam } from './common';

const apiPath = '/sites';

export const Site = {
  getBySite: async (site: string) =>
    await get(fullPath(`${apiPath}/getBy`, pathParam('site', site))),
};
