import { commonMethods, defaultMethods } from './common';
import { BaseApiProps } from '../types';

const BaseApi = (props: BaseApiProps) => {
  const { apiPath } = props;
  const { create, delete: remove, get: fetch, getAll, getList, update } = defaultMethods(apiPath);
  const {
    getByName,
    getByQuery,
    getByUrlName,
    getByValue,
    getMyList,
    getListByCity,
    getListByUrlAndCreatedBetween,
    getListByValue,
    getListCreatedBetween,
    react,
  } = commonMethods(apiPath);

  return {
    apiPath,
    ...{ create, delete: remove, get: fetch, getList, getAll, update },
    ...{
      getByName,
      getByQuery,
      getByUrlName,
      getByValue,
      getMyList,
      getListByCity,
      getListByUrlAndCreatedBetween,
      getListByValue,
      getListCreatedBetween,
      react,
    },
  };
};

export default BaseApi;
