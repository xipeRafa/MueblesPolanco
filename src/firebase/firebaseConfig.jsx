import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

import { getAuth /* onAuthStateChanged  */ } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

//require("dotenv").config()

const app = firebase.initializeApp({
  apiKey: "AIzaSyB2F4R4KkxUwb4GFKs7twRhiHS5i-i51D4",
  authDomain: "scopic-73416.firebaseapp.com",
  projectId: "scopic-73416",
  storageBucket: "scopic-73416.appspot.com",
  messagingSenderId: "475263107333",
  appId: "1:475263107333:web:27180a036864e16618376c"
});

export const authApp = getAuth(app);
export const firestoreDB = getFirestore(app);
export const storageDocs = getStorage(app);
