const {
  REACT_APP_API_GATEWAY_REGION: apiGatewayRegion = 'us-west-2',
  REACT_APP_API_GATEWAY_WEB_API: apiGatewayWebApi = 'https://api.pcl-dev.com/v1',
  REACT_APP_COGNITO_APP_CLIENT_ID: cognitoAppClientId = '5vl88rtqrfv9eub0kb09i5e5jp',
  REACT_APP_COGNITO_DOMAIN: cognitoDomain = 'auth.pcl-dev.com',
  REACT_APP_COGNITO_IDENTITY_POOL_ID:
    cognitoIdentityPoolId = 'us-west-2:d10c30af-9ebb-4059-9c40-6a80943497a0',
  REACT_APP_COGNITO_RESPONSE_TYPE: cognitoResponseType = 'code',
  REACT_APP_COGNITO_REDIRECT_SIGN_IN: cognitoRedirectSignIn = 'https://localhost:3100/auth/login',
  REACT_APP_COGNITO_REDIRECT_SIGN_OUT:
    cognitoRedirectSignOut = 'https://localhost:3100/auth/logout',
  REACT_APP_COGNITO_REGION: cognitoRegion = 'us-west-2',
  REACT_APP_COGNITO_SCOPE:
    cognitoScope = 'phone email profile openid aws.cognito.signin.user.admin',
  REACT_APP_COGNITO_USER_POOL_ID: cognitoUserPoolId = 'us-west-2_A4QX296JM',
  REACT_APP_ITEM_KEY_PREFIX: itemKeyPrefix = 'PetConsole.',
  REACT_APP_GEO_MAP_NAME: geoMapName = 'dev-web-aws-esri-nav-map',
  REACT_APP_GEO_MAP_STYLE: geoMapStyle = 'VectorEsriNavigation',
  REACT_APP_GEO_REGION: geoMapRegion = 'us-west-2',
  REACT_APP_S3_BUCKET: s3Bucket = 'dev-web-aws-member-image',
  REACT_APP_S3_REGION: s3Region = 'us-west-2',
} = process.env;

const reactEnvVar = {
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
  itemKeyPrefix,
  geoMapName,
  geoMapStyle,
  geoMapRegion,
  s3Bucket,
  s3Region,
};

export default reactEnvVar;
