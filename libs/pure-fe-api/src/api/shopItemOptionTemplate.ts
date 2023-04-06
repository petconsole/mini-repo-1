import BaseApi from './BaseApi';
import { Api, OptionsType } from '../types';

const apiPath = '/shopItems/optionTemplates';
const { getListByValue, ...baseApi } = BaseApi({ apiPath });

export const ShopItemOptionTemplate: Api = {
  ...baseApi,
  getListByShop: async (shopId: string, options: OptionsType) =>
    getListByValue('shopId', shopId, options),
};
