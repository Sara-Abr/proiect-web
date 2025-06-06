'use client'
import { LoginForm } from "@/components/ui/login-form";
import { useRouter } from 'next/navigation';

export default function LogIn() {
  const router = useRouter();
  return (
    <div>
       <nav className="navbar">
        <ul>
          <li onClick={() =>router.push('/')}>Acasă</li>
          <li onClick={() =>  router.push('/galerie')}>Galerie</li>
          <li onClick={() => router.push('/blog')}>Blog</li>
          <li onClick={() =>router.push('/posts')}>Postările mele</li>
          <li onClick={() =>router.push('/account')}>Account</li>
        </ul>
      </nav>
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-[#e3f2e8] text-[#333]">
      <div className="w-full max-w-sm bg-[#f8dbe8] p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-[#436f53] mb-6 text-center">Autentificare</h2>
        <LoginForm />
      </div>
    </div>
    </div>
  );
};

