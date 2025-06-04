// lib/firebaseConfig.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'; // Import Realtime Database
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';

//<script src="https://www.gstatic.com/firebasejs/8.6.2/firebase-auth.js"></script>
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getDatabase(app); // Use Realtime Database
export const auth = getAuth(app);
export const provider_google = new firebase.auth.GoogleAuthProvider(); //pt conectarea cu contul de google
export { db };