import { defaultMethods, fullPath, get, limitParams, pathParam } from './common';
import { optionsType } from '../types';

const apiPath = '/reactions';
const { create, delete: remove, get: fetch, getList, update } = defaultMethods(apiPath);

export const Reaction = {
  ...{ create, delete: remove, get: fetch, getList, update },
  getByReactionTo: async (reactionToId: string) =>
    await get(fullPath(`${apiPath}/getBy`, pathParam('reactionToId', reactionToId))),
  getListByMember: async (
    { memberId }: { memberId: string },
    { limit, nextKey }: optionsType = {},
  ) =>
    await get(
      fullPath(apiPath, `${pathParam('memberId', memberId)}${limitParams(limit, nextKey)}`),
    ),
  getListByReactionTo: async (
    { reactionToId }: { reactionToId: string },
    { limit, nextKey }: optionsType = {},
  ) =>
    await get(
      fullPath(apiPath, `${pathParam('reactionToId', reactionToId)}${limitParams(limit, nextKey)}`),
    ),
};
