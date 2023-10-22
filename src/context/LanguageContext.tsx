import { createContext, FC, useContext, useState, ReactNode } from 'react';
import { translationData, TranslationData } from '../components/translations/translationData';

interface LanguageContextType {
  language: string;
  changeLanguage: (newLanguage: string) => void;
  translation: TranslationData;
}

type LanguageProviderProps = {
  children: ReactNode;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translation, setTranslation] = useState(translationData[language])

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
    setTranslation(translationData[newLanguage]);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translation }}>
      {children}
    </LanguageContext.Provider>
  );
};
