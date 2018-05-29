import { firebaseEnv } from '../../../.env.local';

export const rrfConfig = { userProfile: 'users' };

export const connConfig = {
  apiKey: firebaseEnv.apiKey,
  authDomain: firebaseEnv.authDomain,
  databaseURL: firebaseEnv.databaseURL,
  storageBucket: firebaseEnv.storageBucket,
  messagingSenderId: firebaseEnv.messagingSenderId,
};
