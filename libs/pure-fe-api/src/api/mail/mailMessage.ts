import BaseApi from '../BaseApi';
import { fullPath, get, optionalParam, post } from "../common";
import { Api } from '../../types';

const apiPath = '/mail/messages';

export const MailMessage: Api = {
  ...BaseApi({ apiPath }),
  move: async (messageId: string, folderId: string) =>
    post(`${apiPath}/move/${messageId}`, { recipientFolderId: folderId }),
  read: async (messageId: string) => get(`${apiPath}/read/${messageId}`),
  remove: async (messageId: string, sent: boolean) =>
    post(fullPath(`${apiPath}/remove/${messageId}`, optionalParam('sent', sent))),
  trash: async (messageId: string) => post(`${apiPath}/trash/${messageId}`),
};
