import { defaultMethods, fullPath, get, pathParam } from './common';

const apiPath = '/ratings';
const { create, update } = defaultMethods(apiPath);

export const Rating = {
  ...{ create, update },
  getByRated: async (ratedId: string) =>
    await get(fullPath(`${apiPath}/getBy`, pathParam('ratedId', ratedId))),
};
