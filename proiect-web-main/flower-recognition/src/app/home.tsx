import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1 className="title">Florile noastre</h1>
      <p className="subtitle">Explore, Learn and Identify Flowers with us</p>

      <div className="button-group">
        <button className="btn primary" onClick={() => navigate('/gallery')}>Galerie</button>
        <button className="btn" onClick={() => navigate('/blog')}>Blog</button>
        <button className="btn" onClick={() => navigate('/auth/login')}>Login</button>
      </div>
    </div>
  );
};

export default Home;
