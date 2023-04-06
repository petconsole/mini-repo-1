import BaseApi from './BaseApi';
import { defaultMethods, limitParams, optionalParam, pathParam } from './common';
import { Api, OptionsType } from '../types';

const apiPath = '/posts';
const { getWith } = defaultMethods(apiPath);

export const Post: Api = {
  ...BaseApi({ apiPath }),
  getListByTopicAndThreadAndFeedBetween: async (
    topicId: string,
    threadId?: string,
    startDate?: string,
    endDate?: string,
    { limit, nextKey, scanForward }: OptionsType = {},
  ) =>
    getWith(
      [
        pathParam('topicId', topicId),
        pathParam('threadId', threadId),
        pathParam('startDate', startDate),
        pathParam('endDate', endDate),
        optionalParam('scanForward', scanForward),
        limitParams(limit, nextKey),
      ].join(''),
    ),
};
