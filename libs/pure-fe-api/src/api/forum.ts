import BaseApi from './BaseApi';
import { Api, OptionsType } from '../types';

const apiPath = '/forums';
const { getByValue, getListByValue, ...baseApi } = BaseApi({ apiPath });

export const Forum: Api = {
  ...baseApi,
  getByHierarchy: async (hierarchy: string) => getByValue('hierarchy', hierarchy),
  getListByForum: async (forumId: string, options: OptionsType) =>
    getListByValue('forumId', forumId, options),
  getListByHierarchy: async (hierarchy: string, options: OptionsType) =>
    getListByValue('hierarchy', hierarchy, options),
};
