import BaseApi from './BaseApi';
import { Api, OptionsType } from '../types';

const apiPath = '/orders/orderLines';
const { getListByValue, ...baseApi } = BaseApi({ apiPath });

export const OrderLine: Api = {
  ...baseApi,
  getListByOrder: async (orderId: string, options: OptionsType) =>
    getListByValue('orderId', orderId, options),
};
