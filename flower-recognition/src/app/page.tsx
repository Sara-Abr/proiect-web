'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
const router = useRouter();
 
  return (
  <div className="home-layout">
      <nav className="navbar">
        <ul>
          <li onClick={() =>router.push('/')}>Acasă</li>
          <li onClick={() =>  router.push('/galerie')}>Galerie</li>
          <li onClick={() => router.push('/blog')}>Blog</li>
          <li onClick={() =>router.push('/posts')}>Postările mele</li>
          <li onClick={() =>router.push('/account')}>Account</li>
        </ul>
      </nav>

      <div className="main-content">
        <section className="intro-section">
          <h1 className="title">Florile noastre</h1>
          <div className="button-group">
            <button className="btn primary" onClick={() => router.push('/galerie')}>Galerie</button>
            <button className="btn" onClick={() => router.push('/blog')}>Blog</button>
            <button className="btn" onClick={() => router.push('/logIn')}>Login</button>
          </div>
        </section>

        <section className="description-section">
          <div className="text">
            <h2>Despre site</h2>
            <p>
              Bine ai venit pe site-ul nostru dedicat florilor! Aici poți explora o colecție variată de flori,
              poți învăța despre ele și poți citi articole interesante scrise de pasionați de natură.
            </p>
          </div>
          <div className="image">
            <img
              src= 'gradinacuflori.jpeg'
              alt="Grădină de flori"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

        
