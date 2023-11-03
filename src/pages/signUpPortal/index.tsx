import React, { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { SignUpPortalContainer } from '../signUpPortal/styles'
import { useNavigate } from 'react-router-dom'

export interface SignUpPortalProps {
  onClose: () => void;
}

export function SignUpPortal () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign up with:', name, email, password); // enviar name email password para banco de dados

    navigate('/')
    
  };

  const { translation } = useLanguage();

  return (
    <SignUpPortalContainer>
      <div className="signUp">
      <h2>{translation.SignUpPortal.signUp}</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder={translation.SignUpPortal.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type={translation.SignUpPortal.email}
          placeholder={translation.SignUpPortal.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type={translation.SignUpPortal.password}
          placeholder={translation.SignUpPortal.password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{translation.SignUpPortal.signUp}</button>
      </form>
      </div>
    </SignUpPortalContainer>
  );
}


