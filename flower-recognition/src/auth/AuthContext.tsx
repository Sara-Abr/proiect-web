'use client'
import { useEffect, useState, createContext, useContext, ReactNode } from 'react'
import useFirebaseAuth from './useFirebaseAuth';
import { UserCredential } from 'firebase/auth';

interface AuthUserContextType {
  authUser: any;
  loading: boolean;
  signInWithEmailAndPassword: (email: string, password: string) => Promise<UserCredential>;
  createUserWithEmailAndPassword: (email: string, password: string) => Promise<UserCredential>;
  signOut: () => Promise<void>;
}

const AuthUserContext = createContext<AuthUserContextType>({
  authUser: null,
  loading: true,
  signInWithEmailAndPassword: async (email: string, password: string) => {
    throw new Error("signInWithEmailAndPassword not implemented");
  },
  createUserWithEmailAndPassword: async (email: string, password: string) => {
    throw new Error("createUserWithEmailAndPassword not implemented");
  },
  signOut: async () => {
    throw new Error("signOut not implemented");}
}
);


export function AuthUserProvider({ children }: { children: ReactNode }) {
  const auth = useFirebaseAuth();
  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
}

export const useAuth = () => useContext(AuthUserContext);