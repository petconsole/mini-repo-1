import { defaultMethods, fullPath, get, limitParams, optionalParam, post, update } from './common';
import { optionsType, RecordType } from '../types';

const apiPath = '/stripe';
const stripeAccountsPath = `${apiPath}/stripeAccounts`;

export const Stripe = {
  accountsCreate: async (body: RecordType) => await post(`${apiPath}/accounts/create`, body || {}),
  accountLinksCreate: async ({ shopId, stripeId }: { shopId: string; stripeId: string }) =>
    await post(`${apiPath}/accountLinks/create`, {
      returnPath: `${process.env.REACT_APP_ROOT_PATH}/my/shops/${shopId}`,
      stripeId,
    }),
  checkoutSessionsCreate: async (shopId: string, returnPath: string) =>
    await post(`${apiPath}/checkout/sessions/create`, {
      shopId,
      returnPath: `${process.env.REACT_APP_ROOT_PATH}${returnPath}`,
    }),
  checkoutSessionsSubscribe: async ({
    pclTierId,
    entityName,
    entityType,
    entityId,
    interval,
    currency,
    source,
    returnPath,
  }: {
    pclTierId: string;
    entityName: string;
    entityType: string;
    entityId: string;
    interval: string;
    currency: string;
    source: string;
    returnPath: string;
  }) =>
    await post(`${apiPath}/checkout/sessions/subscribe`, {
      pclTierId,
      entityName: encodeURIComponent(entityName),
      entityType,
      entityId,
      interval,
      currency,
      source: `${process.env.REACT_APP_ROOT_PATH}${source}`,
      returnPath: `${process.env.REACT_APP_ROOT_PATH}${returnPath}`,
    }),
  getAccounts: async () => await get(`${apiPath}/getAccounts/stripe`),
  getCheckoutSession: async (sessionId: string) =>
    get(`${apiPath}/checkout/sessions/${sessionId}`).then(({ entityName, ...rest }) => ({
      entityName: decodeURIComponent(entityName),
      ...rest,
    })),
};

export const StripeAccount = {
  ...defaultMethods(stripeAccountsPath),
  getByShopId: async (shopId: string) => await get(`${stripeAccountsPath}/shop/${shopId}`),
  getListCreatedBetween: async (
    { fromCreatedAt, toCreatedAt }: { fromCreatedAt?: string; toCreatedAt?: string },
    { limit, nextKey }: optionsType = {},
  ) =>
    await get(
      fullPath(
        stripeAccountsPath,
        `${optionalParam('fromCreatedAt', fromCreatedAt)}${optionalParam(
          'toCreatedAt',
          toCreatedAt,
        )}${limitParams(limit, nextKey)}`,
      ),
    ),
  updateStripeStatus: async (stripeId: string) =>
    await update(`${stripeAccountsPath}/updateStripeStatus/${stripeId}`, { stripeId }),
};
