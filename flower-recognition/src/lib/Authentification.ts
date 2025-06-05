
import { auth, db } from '../config/firebaseConfig'
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
  onAuthStateChanged
} from 'firebase/auth'
import { ref, set } from 'firebase/database' 

interface SignUpData {
  email: string
  password: string
  displayName?: string
}

// Sign up + save profile
export async function signUp({ email, password, displayName }: SignUpData) {
  const cred: UserCredential = await createUserWithEmailAndPassword(auth, email, password)
  const { user } = cred
  // save in Realtime Database under `users/{uid}`
  await set(ref(db, `users/${user.uid}`), {
    uid: user.uid,
    email: user.email,
    displayName: displayName || null,
    createdAt: new Date().toISOString()
  })
  return user
}

// Login
export function logIn(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password)
}

// Logout
export function logOut() {
  return signOut(auth)
}

export function onUserStateChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback)
}