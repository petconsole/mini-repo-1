import { defaultMethods, fullPath, get, limitParams, pathParam } from './common';
import { optionsType } from '../types';

const apiPath = '/cartItems';

export const CartItem = {
  ...defaultMethods(apiPath),
  getListByCart: async (cartId: string, { limit, nextKey }: optionsType = {}) =>
    await get(fullPath(apiPath, `${pathParam('cartId', cartId)}${limitParams(limit, nextKey)}`)),
};
