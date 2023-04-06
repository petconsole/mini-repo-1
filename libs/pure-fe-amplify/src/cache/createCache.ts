import { Cache } from '@aws-amplify/cache';
import { CacheItemOptions, ICache } from '@aws-amplify/cache/lib-esm/types';
import reactEnvVar from '../reactEnvVar';

let cache: ICache;

const createCache = () => {
  cache = Cache.createInstance({ keyPrefix: reactEnvVar.itemKeyPrefix });
};

export const getLocalItem = (key: string, options?: CacheItemOptions | undefined) => {
  if (!cache) createCache();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return cache.getItem(key, options);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setLocalItem = (key: string, value: any, options?: CacheItemOptions | undefined) => {
  if (!cache) createCache();

  return cache.setItem(key, value, options);
};
