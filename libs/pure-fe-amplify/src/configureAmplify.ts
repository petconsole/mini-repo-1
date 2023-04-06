import { Amplify } from '@aws-amplify/core';
import amplifyConfig from './amplifyConfig';

const configureAmplify = () => Amplify.configure(amplifyConfig);

export default configureAmplify;
