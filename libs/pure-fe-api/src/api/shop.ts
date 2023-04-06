import BaseApi from './BaseApi';
import { Api, OptionsType } from '../types';

const apiPath = '/shops';
const { getListByValue, ...baseApi } = BaseApi({ apiPath });

export const Shop: Api = {
  ...baseApi,
  // getListByOwner may be deprecated by getMyList
  getListByOwner: async ({ ownerId }: { ownerId: string }, options: OptionsType) =>
    getListByValue('ownerId', ownerId, options),
  getListByShopName: async ({ shopName }: { shopName: string }, options: OptionsType) =>
    getListByValue('shopName', shopName, options),
};
