import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'regenerator-runtime/runtime';

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

const firestore = firebase.firestore();

export const createUserProfileDocument = async ({ user }) => {
  if (!user) return null;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = userRef.get();

  if (!snapshot.exists) {
    const createdAt = new Date();
    const { email } = user;
    try {
      await userRef.set({
        email,
        createdAt,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
  if (!uid) return null;

  try {
    const userDocument = await firestore.collection('users').doc(uid).get();

    return { uid, ...userDocument.data() };
  } catch (error) {
    console.error(error);
  }
};

export const auth = firebase.auth();
