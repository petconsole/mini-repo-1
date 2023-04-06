import BaseApi from './BaseApi';
import { post } from "./common";
import { Api, OptionsType } from '../types';

const apiPath = '/shopItems/variants';
const { getListByValue, ...baseApi } = BaseApi({ apiPath });

export const ShopItemVariant: Api = {
  ...baseApi,
  getListByShopItem: async (shopItemId: string, options: OptionsType) =>
    getListByValue('shopItemId', shopItemId, options),
  getListByShopItemAndIsAvailable: async (shopItemId: string, options: OptionsType) =>
    getListByValue('shopItemId', shopItemId, { ...options, all: true }),
  upsertList: async (shopItemId: string, variants: unknown, replace = true) =>
    post(`${apiPath}/upsertList`, { shopItemId, variants, replace }),
};
