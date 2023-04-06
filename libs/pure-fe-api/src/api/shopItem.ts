import BaseApi from './BaseApi';
import { pathParam } from './common';
import { Api, OptionsType, RecordType } from '../types';

const apiPath = '/shopItems';
const { getByQuery, getListByValue, ...baseApi } = BaseApi({ apiPath });

export const ShopItem: Api = {
  ...baseApi,
  getByShopAndSku: async (shopId: string, sku: string) =>
    getByQuery(`${pathParam('shopId', shopId)}${pathParam('sku', sku)}`),
  getListByShop: async (shopId: string, options: OptionsType) =>
    getListByValue('shopId', shopId, options),
  getListByShopAndAvailable: async (shopId: string, options: OptionsType) => {
    const result = await getListByValue('shopId', shopId, options);

    if (!result.items) return result;

    return { ...result, items: result.items.filter((item: RecordType) => item.isActive) };
  },
};
