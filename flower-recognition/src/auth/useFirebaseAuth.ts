'use client'
import { useState, useEffect } from 'react';
import {
  auth
} from '../config/firebaseConfig';

import {
  createUserWithEmailAndPassword as _createUserWithEmailAndPassword,
  signInWithEmailAndPassword as _signInWithEmailAndPassword,
  signOut as _signOut,
  onAuthStateChanged,
  User,
  UserCredential
} from 'firebase/auth';

export interface FormattedAuthUser {
  uid: string;
  email: string | null;
}

const formatAuthUser = (user: User): FormattedAuthUser => ({
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<FormattedAuthUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const authStateChanged = async (user: User | null): Promise<void> => {
    if (!user) {
      setAuthUser(null);
      setLoading(false);
      return;
    }

    const formatted = formatAuthUser(user);
    setAuthUser(formatted);
    setLoading(false);
  };

  const signInWithEmailAndPassword = (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return _signInWithEmailAndPassword(auth, email, password);
  };

  const createUserWithEmailAndPassword = (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return _createUserWithEmailAndPassword(auth, email, password);
  };

  const signOut = (): Promise<void> => {
    return _signOut(auth).then(() => {
      setAuthUser(null);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
  };
}
