import reactEnvVar from './reactEnvVar';

const apiEndpointName = 'web-api';
const defaultIndexName = 'None';
const {
  apiGatewayRegion,
  apiGatewayWebApi,
  cognitoAppClientId,
  cognitoDomain,
  cognitoIdentityPoolId,
  cognitoResponseType,
  cognitoRedirectSignIn,
  cognitoRedirectSignOut,
  cognitoRegion,
  cognitoScope,
  cognitoUserPoolId,
  geoMapName = 'geoMapName',
  geoMapStyle,
  geoMapRegion,
  s3Bucket,
  s3Region,
} = reactEnvVar;

const amplifyConfig = {
  Auth: {
    mandatorySignIn: false,
    region: cognitoRegion,
    userPoolId: cognitoUserPoolId,
    userPoolWebClientId: cognitoAppClientId,
    identityPoolId: cognitoIdentityPoolId,
    oauth: {
      // oauth is used for the Hosted UI configuration
      domain: cognitoDomain,
      scope: cognitoScope.split(' '),
      redirectSignIn: cognitoRedirectSignIn,
      redirectSignOut: cognitoRedirectSignOut,
      responseType: cognitoResponseType,
    },
  },
  geo: {
    AmazonLocationService: {
      maps: {
        items: {
          [`${geoMapName}`]: {
            // REQUIRED - Amazon Location Service Map resource name
            style: geoMapStyle, // REQUIRED - String representing the style of map resource
          },
        },
        default: geoMapName, // REQUIRED - Amazon Location Service Map resource name to set as default
      },
      search_indices: {
        items: [defaultIndexName], // REQUIRED - Amazon Location Service Place Index name
        default: defaultIndexName, // REQUIRED - Amazon Location Service Place Index name to set as default
      },
      region: geoMapRegion, // REQUIRED - Amazon Location Service Region
    },
  },
  Storage: { AWSS3: { region: s3Region, bucket: s3Bucket } },
  API: {
    endpoints: [{ name: apiEndpointName, endpoint: apiGatewayWebApi, region: apiGatewayRegion }],
  },
};

export default amplifyConfig;
