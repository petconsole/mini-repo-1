import BaseApi from './BaseApi';
import { post } from './common';
import { Api, OptionsType } from '../types';

const apiPath = '/pclTiers';
const { getListByValue, ...baseApi } = BaseApi({ apiPath });

export const PclTier: Api = {
  ...baseApi,
  getListByPclService: async (pclServiceId: string, options: OptionsType) =>
    getListByValue('serviceId', pclServiceId, options),
  createStripe: async (pclTierId: string) => post(`${apiPath}/createStripe/${pclTierId}`, {}),
  updateStripe: async (pclTierId: string) => post(`${apiPath}/updateStripe/${pclTierId}`, {}),
};
