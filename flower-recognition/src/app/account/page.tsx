'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/auth/AuthContext';
import { Button } from '@/components/ui/button';


const Account = () => {
  const { authUser, loading, signOut} = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!authUser)
      router.push('/logIn')
  }, [authUser])

  return (
    <div>  <h1>You are logged in!</h1>
    <div className="flex flex-col gap-3 mt-2">
                <Button
                    onClick={() => signOut()}
                  className="w-full bg-[#436f53] hover:bg-[#6a8f73] text-white">
                  Sign Out
                </Button>
                </div>
                </div>
  )
}

export default Account;