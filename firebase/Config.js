import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  query,
  onSnapshot,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// https://docs.expo.dev/guides/environment-variables/  
// !!! Do not store sensitive info, such as private keys, in EXPO_PUBLIC_ variables.
//  These variables will be visible in plain-text in your compiled application. :P
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};

initializeApp(firebaseConfig);

const firestore = getFirestore();

const ITEMS = "items";
const USERS = "users";

export {
  firestore,
  ITEMS,
  collection,
  addDoc,
  deleteDoc,
  doc,
  query,
  onSnapshot,
  serverTimestamp,
  orderBy,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  USERS,
};
