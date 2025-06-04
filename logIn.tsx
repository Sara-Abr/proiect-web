import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem('user', username);
      navigate('/');
    }
  };

  return (
    <div className="container">
      <h2>Autentificare</h2>
      <input
        type="text"
        placeholder="Nume utilizator"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Intră în blog</button>
    </div>
  );
};

export default LoginPage;
