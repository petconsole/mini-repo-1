import configureAmplify from '../configureAmplify';
import storageGet, { StorageGetReturns } from './storageGet';

describe('storageGet', function tests() {
  beforeAll(configureAmplify);

  test('file is found', async () => {
    const result: string | StorageGetReturns = await storageGet({
      s3Key: 'storageGet-unit-test-do-not-remove.png',
      config: { download: true },
    });

    expect(typeof result).toBe('object');

    let metadata = { httpStatusCode: 0 };
    let data: string | Blob = '';

    if (typeof result === 'object') {
      const { $metadata, Body } = result;

      metadata = $metadata;
      data = Body;
    }

    expect(metadata.httpStatusCode).toBe(200);
    expect(typeof data).toBe('string');
    expect(data.length).toBeGreaterThan(0);
  });

  test('file not found', async () => {
    // Suppress the following console logging. Amplify does not support NodeJS and throws a
    // TypeError, which we'll catch, but it also logs a 404 error to the console
    //   console.error
    //     [ERROR] 25:20.234 axios-http-handler - Request failed with status code 404
    //
    //       at ConsoleLogger.Object.<anonymous>.ConsoleLogger._log (node_modules/@aws-amplify/core/src/Logger/ConsoleLogger.ts:115:4)
    //       at ConsoleLogger.Object.<anonymous>.ConsoleLogger.error (node_modules/@aws-amplify/core/src/Logger/ConsoleLogger.ts:174:12)
    //       at node_modules/@aws-amplify/storage/src/providers/axios-http-handler.ts:213:14
    //       at node_modules/@aws-sdk/middleware-serde/src/deserializerMiddleware.ts:19:24

    // eslint-disable-next-line no-console
    const consoleError = console.error;

    // eslint-disable-next-line no-console
    console.error = (message) => {
      expect(message).toMatch(/404/);
    };

    await expect(
      storageGet({
        s3Key: 'storageGet-unit-test-not-found.png',
        config: { download: true },
      }),
    ).rejects.toThrow(/stream.pipe is not a function/);

    // eslint-disable-next-line no-console
    console.error = consoleError;
  });
});
