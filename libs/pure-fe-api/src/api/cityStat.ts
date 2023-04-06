import BaseApi from './BaseApi';
import { Api, OptionsType } from '../types';

const apiPath = '/cityStats';
const { getListByValue, ...baseApi } = BaseApi({ apiPath });

export const CityStat: Api = {
  ...baseApi,
  getListByMembers: async (options: OptionsType) => getListByValue('byMembers', '', options),
};
