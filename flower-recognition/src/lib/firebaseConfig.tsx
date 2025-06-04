// lib/firebaseConfig.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'; 
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
//import 'firebase/compat/auth';
//import 'firebase/compat/database';
//import firebase from 'firebase/compat/app';

const firebaseConfig = {

  apiKey: "AIzaSyB9jGHMi8rPWs20Kr43mrwCe2Ljxk-h0Eg",

  authDomain: "flower-recognition-b300a.firebaseapp.com",

  databaseURL: "https://flower-recognition-b300a-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "flower-recognition-b300a",

  storageBucket: "flower-recognition-b300a.firebasestorage.app",

  messagingSenderId: "1064456115055",

  appId: "1:1064456115055:web:8819ab619daae558ba8e9a"

};

console.log("Firebase Config:", firebaseConfig); 

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getDatabase(app); // Use Realtime Database
const auth = getAuth(app);
export const provider_google = new GoogleAuthProvider(); //pt conectarea cu contul de google
export { db, auth,  app};