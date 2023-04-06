import BaseApi from './BaseApi';
import { Api, OptionsType } from '../types';

const apiPath = '/pets';
const { getListByValue, ...baseApi } = BaseApi({ apiPath });

export const Pet: Api = {
  ...baseApi,
  getListByType: async (type: string, options: OptionsType) =>
    getListByValue('type', type, options),
};
