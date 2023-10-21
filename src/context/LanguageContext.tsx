import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext<any>();

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('Português'); // Defina o idioma padrão

  const switchLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}