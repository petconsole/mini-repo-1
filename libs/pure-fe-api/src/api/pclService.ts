import { ourDateToString } from '@pure/pure-fe-utils';
import BaseApi from './BaseApi';
import { fullPath, optionalParam, post } from './common';
import { Api } from '../types';

const apiPath = '/pclServices';
const { getByValue, ...baseApi } = BaseApi({ apiPath });

export const PclService: Api = {
  ...baseApi,
  createProducts: async (id: string) => post(`${apiPath}/createProducts/${id}`, {}),
  createPclTiers: async (id: string, effectiveDate = ourDateToString(new Date())) =>
    post(
      fullPath(`${apiPath}/createTiers/${id}`, optionalParam('effectiveDate', effectiveDate)),
      {},
    ),
  getByServiceCode: async (serviceCode: string) => getByValue('serviceCode', serviceCode),
};
