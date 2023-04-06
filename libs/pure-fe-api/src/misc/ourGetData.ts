// Load all data for an api endpoint and return it.
import { GetListResults, RecordType } from '../types';

const ourGetData = async (
  endpoint: (...rest: unknown[]) => Promise<GetListResults>,
  params: unknown[],
  items = 'items',
) => {
  const requestParams = [...params];
  const length = params.length;
  const options =
    length > 0 && typeof params[length - 1] === 'object' ? { ...<RecordType>params[length - 1] } : null;

  if (options) requestParams[length - 1] = options;

  let loaded: RecordType[] = [];
  let data= <GetListResults>{ items: []};

  do {
    if (options) options.nextKey = data.nextKey;

    data = await endpoint(...requestParams);

    if (data[items]) loaded = loaded.concat(<RecordType[]>data[items]);
  } while (!data[items] || data.nextKey);

  return loaded;
};

export default ourGetData;
