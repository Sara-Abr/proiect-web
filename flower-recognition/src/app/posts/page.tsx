'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/auth/AuthContext';


const Posts = () => {
  const { authUser, loading} = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!authUser)
      router.push('/logIn')
  }, [authUser])

  return (
    <></>
  )
}

export default Posts;