import React, { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { SignUpPortalContainer } from '../signUpPortal/styles'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

interface CreateUserParams {
  name: string
  email: string
  password: string
}


export interface SignUpPortalProps {
  onClose: () => void;
}

export function SignUpPortal () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const createUser = async ({name, email, password}: CreateUserParams) => {
    try {
      const response = await axios.post('http://localhost:3333/users', {
        name: name,
        email: email,
        password: password,
      });
      if (response.status === 200) {
    console.log('User created successfully');
        navigate('/');
      } else {
        throw new Error('Failed to create user');
      } 
    } catch (error) {
      console.error('Failed to create user. Please try again.', error);
    } }

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
      if (name.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
      createUser({ name, email, password });
    } else {
      console.error('Preencha todos os campos');
    }
    
  };

  const { translation } = useLanguage();

   

  return (
    <SignUpPortalContainer>
      <div className="signUp">
      <h2>{translation.SignUpPortal.signUp}</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="name"
          placeholder={translation.SignUpPortal.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder={translation.SignUpPortal.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
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


