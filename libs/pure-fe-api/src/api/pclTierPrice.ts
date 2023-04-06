import BaseApi from './BaseApi';
import { fullPath, get, optionalParam, pathParam, post } from './common';
import { Api, OptionsType } from '../types';

const apiPath = '/pclTierPrices';
const { getListByValue, ...baseApi } = BaseApi({ apiPath });

export const PclTierPrice: Api = {
  ...baseApi,
  getByPclTierAndEffective: async (pclTierId: string, effectiveDate?: string) =>
    get(
      fullPath(
        `${apiPath}/getBy`,
        `${pathParam('tierId', pclTierId)}${optionalParam('effectiveDate', effectiveDate)}`,
      ),
    ),
  getListByPclTier: async (pclTierId: string, options: OptionsType) =>
    getListByValue('tierId', pclTierId, options),
  createStripe: async (pclTierPriceId: string) =>
    post(`${apiPath}/createStripe/${pclTierPriceId}`, {}),
};
