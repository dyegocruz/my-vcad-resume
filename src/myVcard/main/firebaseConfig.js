import env from '../../../.env.local';

module.exports = {
  rrfConfig: { userProfile: 'users' },
  connConfig: {
    apiKey: env.firebase.apiKey,
    authDomain: env.firebase.authDomain,
    databaseURL: env.firebase.databaseURL,
    storageBucket: env.firebase.storageBucket,
    messagingSenderId: env.firebase.messagingSenderId,
  },
};
