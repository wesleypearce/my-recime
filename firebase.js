import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: 'AIzaSyDpDce77H4K5qgDWiD5v8lw6IGm3bR9-rI',
  authDomain: 'recime-279612.firebaseapp.com',
  databaseURL: 'https://recime-279612.firebaseio.com',
  projectId: 'recime-279612',
  storageBucket: 'recime-279612.appspot.com',
  messagingSenderId: '990228268715',
  appId: '1:990228268715:web:a969b7ee9a7a339ab459ee',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
