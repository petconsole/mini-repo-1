import BaseApi from './BaseApi';
import { fullPath, get, pathParam, post } from './common';
import { Api, OptionsType, RecordType } from '../types';

const apiPath = '/friends';
const { getByValue, getListByValue, ...baseApi } = BaseApi({ apiPath });

export const Friend: Api = {
  ...baseApi,
  accept: async (name: string) => post(`${apiPath}/accept`, { name }),
  cancel: async (name: string) => post(`${apiPath}/cancel`, { name }),
  canRequest: async (name: string) =>
    get(fullPath(`${apiPath}/canRequest`, pathParam('name', name))),
  decline: async (name: string) => post(`${apiPath}/decline`, { name }),
  getByName: async (name: string) => getByValue('name', name),
  pause: async (name: string) => post(`${apiPath}/pause`, { name }),
  resume: async (name: string) => post(`${apiPath}/resume`, { name }),
  getListByMember: async (memberName: string, options: OptionsType) =>
    getListByValue('name', memberName, options),
  request: async ({ name, message }: RecordType) => post(`${apiPath}/request`, { name, message }),
};
