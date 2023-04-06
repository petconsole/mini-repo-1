import BaseApi from './BaseApi';
import {
  fullPath,
  get,
  limitParams,
  locationParams,
  optionalParam,
  pathParam,
  post,
  update,
} from './common';
import { profileSteps } from '../constants';
import { Api, LocationType, OptionsType, RecordType } from '../types';

const apiPath = '/members';
const idPath = (id: string) => `${apiPath}/${id}`;
const { getByValue, ...baseApi } = BaseApi({ apiPath });

const excludePending = ({
  items: members,
  ...rest
}: {
  items: [];
  rest: unknown[];
}) => ({
  items: members.filter(
    (member: RecordType) =>
      member.profileStep >= profileSteps && !!member.memberName
  ),
  ...rest,
});

export const Member: Api = {
  ...baseApi,
  getCurrent: async () => get(`${apiPath}/current`),
  getCognitoUser: async (email: string) =>
    get(`${apiPath}/getCognitoUser/${email}`),
  getByName: async (name: string) => getByValue('name', name),
  getListCreatedBetween: async (
    {
      fromCreatedAt = '',
      toCreatedAt = '',
      scanForward,
    }: { fromCreatedAt?: string; toCreatedAt?: string; scanForward?: boolean },
    { limit, nextKey }: OptionsType = {},
    includePending = false
  ) => {
    const data = await get(
      fullPath(
        apiPath,
        `${pathParam('fromCreatedAt', fromCreatedAt)}${pathParam(
          'toCreatedAt',
          toCreatedAt
        )}${optionalParam('scanForward', scanForward)}${limitParams(
          limit,
          nextKey
        )}`
      )
    );
    return includePending ? data : excludePending(data);
  },
  getListMemberNameStarts: async (
    memberName: string,
    { limit, nextKey }: OptionsType = {}
  ) =>
    get(
      fullPath(
        apiPath,
        `${pathParam('nameStarts', memberName)}${limitParams(limit, nextKey)}`
      )
    ),
  getListNewest: async (
    includePending = false,
    { limit, nextKey }: OptionsType = {}
  ) =>
    get(
      fullPath(
        apiPath,
        `${pathParam('newest', true)}${pathParam(
          'pending',
          includePending
        )}${limitParams(limit, nextKey)}`
      )
    ),
  getListOldest: async (
    includePending = false,
    { limit, nextKey }: OptionsType = {}
  ) =>
    get(
      fullPath(
        apiPath,
        `${pathParam('oldest', true)}${pathParam(
          'pending',
          includePending
        )}${limitParams(limit, nextKey)}`
      )
    ),
  getListPending: async ({ limit, nextKey }: OptionsType = {}) =>
    get(
      fullPath(
        apiPath,
        `${pathParam('pending', true)}${limitParams(limit, nextKey)}`
      )
    ),
  getListByCity: async (
    { city, province, country }: LocationType,
    { limit, nextKey }: OptionsType = {},
    includePending = false
  ) => {
    const data = await get(
      fullPath(
        apiPath,
        `${locationParams({ city, province, country })}${limitParams(
          limit,
          nextKey
        )}`
      )
    );
    return includePending ? data : excludePending(data);
  },
  getPasswordPolicy: async () => get(`${apiPath}/getPasswordPolicy`),
  getPictureByName: async (name: string) => {
    const member = await get(
      fullPath(`${apiPath}/getBy`, pathParam('name', name))
    );
    const { memberName, picture } = member || {};

    return member ? { memberName, picture } : member;
  },
  update: async (id: string, body: RecordType) =>
    await update(idPath(id), { ...(body || {}), memberId: id }),
  updateNotifications: async () => post(`${apiPath}/updateNotifications`, {}),
  validMemberName: async (memberName: string) =>
    get(fullPath(`${apiPath}/validMemberName`, pathParam('name', memberName))),
};
