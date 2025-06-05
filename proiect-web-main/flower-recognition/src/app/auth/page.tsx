import { auth, db } from '../../lib/firebaseConfig'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
  onAuthStateChanged,
  User,
} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

export interface SignUpData {
  email: string
  password: string
  displayName?: string
}

export async function signUp({ email, password, displayName }: SignUpData) {
  const { user }: UserCredential = await createUserWithEmailAndPassword(auth, email, password)
  await setDoc(doc(db, 'users', user.uid), {
    uid: user.uid,
    email: user.email,
    displayName: displayName || null,
    createdAt: new Date(),
  })
  return user
}

export function logIn(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password)
}

export function logOut() {
  return signOut(auth)
}

export function onUserStateChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback)
}