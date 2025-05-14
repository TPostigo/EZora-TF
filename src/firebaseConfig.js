// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDi5hguS4y6ZcrxiMR32qCbwimuf--PJJA',
  authDomain: 'ezora-t.firebaseapp.com',
  projectId: 'ezora-t',
  storageBucket: 'ezora-t.appspot.com',
  messagingSenderId: '301225296471',
  appId: '1:301225296471:web:7fb8de504b4b4d91b41912'
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
