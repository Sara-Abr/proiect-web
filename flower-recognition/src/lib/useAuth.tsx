'use client'
import { useEffect, useState, createContext, useContext, ReactNode } from 'react'
import { User } from 'firebase/auth'
import { onUserStateChange } from './authentification'

const AuthContext = createContext<User | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  // Listen for user state changes and update the context accordingly
  useEffect(() => {
    const unsubscribe = onUserStateChange(setUser)
    return () => unsubscribe()
  }, [])

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}