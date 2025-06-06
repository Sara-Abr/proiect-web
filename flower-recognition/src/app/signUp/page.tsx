/*'use client'
import { SignUpForm } from "@/components/ui/signup-form";
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/auth/AuthContext';


export default function SignUp() {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  // Optional error handling
  const [error, setError] = useState(null);

  const { createUserWithEmailAndPassword } = useAuth();

  const onSubmit = (event) => {
    event.preventDefault();
    setError(null);
    if (passwordOne === passwordTwo) {
      createUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          router.push("/logged_in");
        })
        .catch(error => {
          setError(error.message);
        });
    } else {
      setError("Passwords do not match");
    }
  };
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-[#e3f2e8] text-[#333]">
      <div className="w-full max-w-sm bg-[#f8dbe8] p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-[#436f53] mb-6 text-center">Înregistrare</h2>
        {SignUpForm()}
      </div>
    </div>
  );
}*/
'use client'

import { SignUpForm } from "@/components/ui/signup-form";
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/auth/AuthContext';

export default function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [passwordOne, setPasswordOne] = useState<string>("");
  const [passwordTwo, setPasswordTwo] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const { createUserWithEmailAndPassword } = useAuth();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (passwordOne === passwordTwo) {
      createUserWithEmailAndPassword(email, passwordOne)
        .then(() => {
          router.push("/");
        })
        .catch((error: { message: string }) => {
          setError(error.message);
        });
    } else {
      setError("Passwords do not match");
    }
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-[#e3f2e8] text-[#333]">
      <div className="w-full max-w-sm">
        <SignUpForm
          onSubmit={onSubmit}
          email={email}
          setEmail={setEmail}
          passwordOne={passwordOne}
          setPasswordOne={setPasswordOne}
          passwordTwo={passwordTwo}
          setPasswordTwo={setPasswordTwo}
          error={error}
        />
      </div>
    </div>
  );
}
