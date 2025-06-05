'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
export default function Home() {
const router = useRouter();
 
  return (
    <div className="home-page">
      <h1 className="title">Florile noastre</h1>
      <p className="subtitle">Explore, Learn and Identify Flowers with us</p>

      <div className="button-group">
        <button className="btn primary" onClick={() =>  router.push('/galerie')}>Galerie</button>
       <button className="btn" onClick={() =>router.push('/blog')}>Blog</button>
       <button className="btn" onClick={() => router.push('/logIn')}>Log In</button>
       <button className="btn" onClick={() => router.push('/signUp')}>Sign Up</button>
      </div>
    </div>
  );
};

        
