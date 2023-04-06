import BaseApi from './BaseApi';
import {
  del,
  get,
  post,
  update,
  fullPath,
  optionalParam,
  pathParam,
  optionParams,
  siteList,
} from './common';
import { Api, OptionsType, RecordType } from '../types';

const apiPath = '/comments';
const idPath = (id: string) => `${apiPath}/${id}`;

export const Comment: Api = {
  ...BaseApi({ apiPath }),
  create: async (body?: RecordType) => post(apiPath, body || {}),
  delete: async (id: string, { commentId, replyId }: { commentId: string; replyId?: string }) =>
    del(
      fullPath(
        idPath(id),
        `${optionalParam('commentId', commentId)}${optionalParam('replyId', replyId)}`,
      ),
    ),
  get: async (id: string, { commentId, replyId }: { commentId: string; replyId?: string }) =>
    get(
      fullPath(
        idPath(id),
        `${optionalParam('commentId', commentId)}${optionalParam('replyId', replyId)}`,
      ),
    ),
  getList: async (commentOnId: string, options: OptionsType) =>
    siteList(apiPath, `${pathParam('commentOnId', commentOnId)}${optionParams(options)}`),
  update: async (_: string, body: RecordType) => update(apiPath, body || {}),
};
