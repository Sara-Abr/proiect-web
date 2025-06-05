'use client'
import { useEffect, useState, createContext, useContext, ReactNode } from 'react'
import { User } from 'firebase/auth'
import { onUserStateChange } from './Authentification'

const AuthContext = createContext<User | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null) //variabila user tine userul curent sau null daca nu este autentificat
  // Listen for user state changes and update the context accordingly
  useEffect(() => {
    const unsubscribe = onUserStateChange(setUser) // cand se modifica starea utilizatorului, se apeleaza setUser pentru a actualiza contextul
    return () => unsubscribe() //used to clean up the listener when the component is removed from the DOM, it avoids memory leaks
  }, [])

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  return useContext(AuthContext)
}