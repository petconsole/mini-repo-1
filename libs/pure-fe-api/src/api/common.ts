import { api } from '@pure/pure-fe-amplify';
import { locationType, OptionsType, RecordType } from '../types';

const apiName = 'web-api';
const getEmptyHeaders = () => ({ headers: {} });

export const apiSite = process.env.REACT_APP_API_SITE || '';

// noinspection JSUnresolvedFunction
export const del = async (path: string) => await api.del(apiName, path, getEmptyHeaders());
export const get = async (path: string) => await api.get(apiName, path, getEmptyHeaders());
export const post = async (path: string, body = {}) =>
  await api.post(apiName, path, { headers: {}, body });
// noinspection JSUnresolvedFunction
export const update = async (path: string, body: object) =>
  await api.patch(apiName, path, { headers: {}, body });

export const pathParam = (param: string, value?: unknown) =>
  `&${param}${value === undefined ? '' : '='}${value === undefined ? '' : value}`;
export const optionalParam = (param: string, value?: unknown) =>
  value || value === 0 || value === false ? pathParam(param, value) : '';
export const limitParams = (limit?: number, nextKey?: object) =>
  `${optionalParam('limit', limit || undefined)}${optionalParam('nextKey', nextKey)}`;
export const locationParams = ({
  city,
  province,
  country,
}: { city?: string; province?: string; country?: string } = {}) =>
  `${pathParam('city', city)}${pathParam('province', province)}${pathParam('country', country)}`;
const createdBetweenParams = (from = '', to = '') =>
  `${pathParam('fromCreatedAt', from)}${pathParam('toCreatedAt', to)}`;
const scanParam = (scanForward?: boolean) => optionalParam('scanForward', scanForward);
export const optionParams = (options: OptionsType = {}) => {
  const { limit, nextKey, all, scanForward } = options;

  return `${limitParams(limit, nextKey)}${optionalParam('all', all)}${scanParam(scanForward)}`;
};

// Reminder: Only the first occurrence of the substring is replaced
export const fullPath = (path: string, params: string) =>
  `${path}${params ? params.replace('&', '?') : ''}`;
export const sitePath = (path: string, params: string) =>
  fullPath(path, `${pathParam('site', apiSite)}${params}`);
export const siteList = (path: string, params: string) => get(sitePath(path, params));

const getByParamName = (path: string, paramName: string) => async (value: string) =>
  get(sitePath(`${path}/getBy`, pathParam(paramName, value)));

/**
 * Export basic functions under one easy to import object.
 * @param apiPath
 */
export const defaultMethods = (apiPath: string) => {
  const idPath = (id: string) => `${apiPath}/${id}`;

  return {
    create: async (body?: object) => await post(sitePath(apiPath, ''), body),
    delete: async (id: string) => await del(idPath(id)),
    get: async (id: string) => await get(idPath(id)),
    getAll: async () => get(sitePath(apiPath, `${pathParam('all', 'true')}`)),
    getList: async ({ limit, nextKey }: OptionsType) =>
      await get(sitePath(apiPath, `${limitParams(limit, nextKey)}`)),
    getWith: async (params: string) => get(sitePath(apiPath, params)),
    update: async (id: string, body: object) => await update(idPath(id), body),
  };
};

/**
 * Export common functions under one easy to import object. * @param apiPath
 * @param apiPath
 */
export const commonMethods = (apiPath: string) => ({
  getByName: getByParamName(apiPath, 'name'),
  getByQuery: async (query: string) => get(fullPath(`${apiPath}/getBy`, query)),
  getByUrlName: async (urlName: string) =>
    get(fullPath(`${apiPath}/getBy`, pathParam('urlName', urlName))),
  getByValue: async (param: string, value: string) =>
    get(sitePath(`${apiPath}/getBy`, pathParam(param, value))),
  getListByCity: async (
    { city, province, country }: locationType,
    { limit, nextKey, all }: OptionsType = {},
  ) =>
    get(
      sitePath(
        apiPath,
        `${locationParams({ city, province, country })}${limitParams(
          limit,
          nextKey,
        )}${optionalParam('all', all)}`,
      ),
    ),
  getListCreatedBetween: async (
    { fromCreatedAt = '', toCreatedAt = '', scanForward }: RecordType,
    { limit, nextKey, all }: OptionsType = {},
  ) =>
    get(
      sitePath(
        apiPath,
        `${pathParam('fromCreatedAt', fromCreatedAt)}${pathParam(
          'toCreatedAt',
          toCreatedAt,
        )}${optionalParam('scanForward', scanForward)}${limitParams(limit, nextKey)}${optionalParam(
          'all',
          all,
        )}`,
      ),
    ),
  getMyList: async ({ limit, nextKey, all }: OptionsType = {}) =>
    get(
      sitePath(
        apiPath,
        `${pathParam('my')}${limitParams(limit, nextKey)}${optionalParam('all', all)}`,
      ),
    ),
  getListByUrlAndCreatedBetween: async (
    { urlName, fromCreatedAt = '', toCreatedAt = '' }: RecordType,
    options: OptionsType,
  ) => {
    const nameParams = pathParam('name', urlName || apiSite);
    const fromToParams = createdBetweenParams(<string>fromCreatedAt, <string>toCreatedAt);

    return siteList(apiPath, `${nameParams}${fromToParams}${optionParams(options)}`);
  },
  getListByValue: async (param: string, value: string, { limit, nextKey, all }: OptionsType = {}) =>
    get(
      sitePath(
        apiPath,
        `${pathParam(param, value)}${limitParams(limit, nextKey)}${optionalParam('all', all)}`,
      ),
    ),
  react: async (id: string, reaction: string, updatedAt?: string) =>
    // Don't use sitePath - only one parameter is expected
    post(fullPath(`${apiPath}/${id}`, pathParam(reaction)), { updatedAt }),
});
