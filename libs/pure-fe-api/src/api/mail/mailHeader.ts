import BaseApi from '../BaseApi';
import { Api, OptionsType } from '../../types';

const apiPath = '/mail/headers';
const { getListByValue, ...baseApi } = BaseApi({ apiPath });

export const MailHeader: Api = {
  ...baseApi,
  getListByRecipientFolder: async (folderId: string, options: OptionsType) =>
    getListByValue('recipientFolderId', folderId, options),
  getListBySenderFolder: async (folderId: string, options: OptionsType) =>
    getListByValue('senderFolderId', folderId, options),
};
