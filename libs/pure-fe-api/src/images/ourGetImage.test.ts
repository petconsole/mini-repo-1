import { configureAmplify } from '@pure/pure-fe-amplify';
import ourGetImage from './ourGetImage';

describe('ourGetImage', function tests() {
  beforeAll(configureAmplify);

  test('file was found', async () => {
    const image = await ourGetImage({
      s3Key: 'storageGet-unit-test-do-not-remove.png',
      log: () => Promise.resolve(new Error()),
      config: { download: true },
    });

    expect(image).toMatch(/PNG/);
  });

  test('file not found', async () => {
    // Suppress the following console logging. Amplify does not support NodeJS and throws a
    // TypeError, which we'll catch, but it also logs a 404 error to the console for us
    //
    //   console.error
    //     [ERROR] 25:20.234 axios-http-handler - Request failed with status code 404
    //
    //       at ConsoleLogger.Object.<anonymous>.ConsoleLogger._log (node_modules/@aws-amplify/core/src/Logger/ConsoleLogger.ts:115:4)
    //       at ConsoleLogger.Object.<anonymous>.ConsoleLogger.error (node_modules/@aws-amplify/core/src/Logger/ConsoleLogger.ts:174:12)
    //       at node_modules/@aws-amplify/storage/src/providers/axios-http-handler.ts:213:14
    //       at node_modules/@aws-sdk/middleware-serde/src/deserializerMiddleware.ts:19:24

    let logged = false;

    // eslint-disable-next-line no-console
    const consoleError = console.error;

    // eslint-disable-next-line no-console
    console.error = (message) => {
      expect(message).toMatch(/404/);
    };

    const image = await ourGetImage({
      s3Key: 'storageGet-unit-test-not-found.png',
      log: (...errors: unknown[]) => {
        logged = true;

        expect(errors.pop().toString()).toMatch(/stream.pipe is not a function/);

        return Promise.resolve(new Error());
      },
      config: { download: true },
    });

    // eslint-disable-next-line no-console
    console.error = consoleError;

    expect(image).toBeNull();
    expect(logged).toBe(true);
  });
});
