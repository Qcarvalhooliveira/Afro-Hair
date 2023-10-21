// src/components/LoginPortal/index.js
import React, { useState } from 'react';
import { LoginPortalContainer } from './styles';

export interface LoginPortalProps {
  onClose: () => void;
}

const LoginPortal: React.FC<LoginPortalProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de autenticação
    console.log('Login with:', email, password);
    onClose();
  };

  return (
    <LoginPortalContainer>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign in</button>
      </form>
      <div className="options">
        <button onClick={() => console.log('Forgot password clicked')}>Forgot password?</button>
        <button onClick={() => console.log('Sign up clicked')}>Sign up</button>
      </div>
      </LoginPortalContainer>
  );
};

export default LoginPortal;
