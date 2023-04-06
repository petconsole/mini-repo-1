import BaseApi from './BaseApi';
import { get, limitParams, optionalParam, pathParam, sitePath } from './common';
import { Api, OptionsType } from '../types';

const apiPath = '/orders/orders';
const { getListByValue, ...baseApi } = BaseApi({ apiPath });

export const Order: Api = {
  ...baseApi,
  getNextByShopAndOrder: async (shopId: string, orderId: string) =>
    get(
      sitePath(
        `${apiPath}/getNext`,
        `${pathParam('shopId', shopId)}${pathParam('orderId', orderId)}`,
      ),
    ),
  getPrevByShopAndOrder: async (shopId: string, orderId: string) =>
    get(
      sitePath(
        `${apiPath}/getPrev`,
        `${pathParam('shopId', shopId)}${pathParam('orderId', orderId)}`,
      ),
    ),
  getListByMember: async (memberId: string, { limit, nextKey, scanForward }: OptionsType = {}) =>
    get(
      sitePath(
        apiPath,
        `${pathParam('memberId', memberId)}${optionalParam(
          'scanForward',
          scanForward,
        )}${limitParams(limit, nextKey)}`,
      ),
    ),
  getListByShop: async (shopId: string, options: OptionsType) =>
    getListByValue('shopId', shopId, options),
  getMyList: async ({ limit, nextKey }: OptionsType = {}) =>
    get(
      sitePath(
        apiPath,
        `${pathParam('my')}${pathParam('scanForward', false)}${limitParams(limit, nextKey)}`,
      ),
    ),
};
