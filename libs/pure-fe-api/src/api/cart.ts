import {
  defaultMethods,
  fullPath,
  get,
  limitParams,
  optionalParam,
  pathParam,
  post,
} from './common';
import { optionsType } from '../types';

const apiPath = '/carts';
const { create, delete: remove, get: fetch, getList, update } = defaultMethods(apiPath);

export const Cart = {
  ...{ create, delete: remove, get: fetch, getList, update },
  adjustItems: async (
    cartId: string,
    shopItemId: string,
    shopItemVariantId: string,
    adjustment: number,
  ) => await post(`${apiPath}/adjustItems`, { cartId, shopItemId, shopItemVariantId, adjustment }),
  getByShop: async (shopId: string) =>
    await get(fullPath(`${apiPath}/getBy`, pathParam('shopId', shopId))),
  getListByOwner: async ({ ownerId }: { ownerId: string }, { limit, nextKey }: optionsType = {}) =>
    await get(fullPath(apiPath, `${pathParam('ownerId', ownerId)}${limitParams(limit, nextKey)}`)),
  getListByMember: async (
    { memberId }: { memberId: string },
    { limit, nextKey }: optionsType = {},
  ) =>
    await get(
      fullPath(apiPath, `${pathParam('memberId', memberId)}${limitParams(limit, nextKey)}`),
    ),
  getListCreatedBetween: async (
    { fromCreatedAt, toCreatedAt }: { fromCreatedAt?: string; toCreatedAt?: string },
    { limit, nextKey }: optionsType = {},
  ) =>
    await get(
      fullPath(
        apiPath,
        `${optionalParam('fromCreatedAt', fromCreatedAt)}${optionalParam(
          'toCreatedAt',
          toCreatedAt,
        )}${limitParams(limit, nextKey)}`,
      ),
    ),
  updateTotal: async (cartId: string) => await post(`${apiPath}/updateTotal`, { cartId }),
};
