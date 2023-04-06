import BaseApi from './BaseApi';
import { Api, OptionsType } from '../types';

const apiPath = '/notifications';
const { getListByValue, ...baseApi } = BaseApi({ apiPath });

export const Notification: Api = {
  ...baseApi,
  // getListByMember may be deprecated by getMyList
  getListByMember: async (memberId = '', options: OptionsType) =>
    getListByValue('memberId', memberId, options),
};
