import firebase from 'firebase';
import env from '../../../.env.local';

const firebaseConfig = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: env.firebase.apiKey,
  authDomain: env.firebase.authDomain,
  databaseURL: env.firebase.databaseURL,
  storageBucket: env.firebase.storageBucket,
  messagingSenderId: env.firebase.messagingSenderId,
};

firebase.initializeApp(firebaseConfig);
const Fire = firebase.database();

export default Fire;
