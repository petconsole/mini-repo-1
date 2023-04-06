import BaseApi from './BaseApi';
import { Api } from '../types';

const apiPath = '/pclHeaders';
const { getByValue, getListByValue, ...baseApi } = BaseApi({ apiPath });

export const PclHeader: Api = {
  ...baseApi,
  getByEntityType: async (entityType: string) => getByValue('entityType', entityType),
  getListBySite: async (site: string) => getListByValue('site', site),
};
