import { fullPath, get, limitParams, pathParam } from './common';
import { Api, OptionsType } from "../types";
import BaseApi from './BaseApi';

const apiPath = '/topics';

export const Topic: Api = {
  ...BaseApi({ apiPath }),
  getListByForum: async (forumId: string, { limit, nextKey }: OptionsType = {}) =>
    get(fullPath(apiPath, `${pathParam('forumId', forumId)}${limitParams(limit, nextKey)}`)),
};
