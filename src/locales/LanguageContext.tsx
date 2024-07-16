import React, { createContext, useContext, useState, ReactNode } from 'react';
import EN from './EN';
import ES from './ES';

// Define el tipo para el contexto
interface LanguageContextType {
  translations: typeof EN;
  setLanguage: (language: string) => void;
  lang: string;
}

// Crea el contexto con un valor por defecto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// Componente proveedor, utilizando ReactNode para tipar children
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [translations, setTranslations] = useState<typeof EN>(EN);
  const [lang, setLang] = useState<string>('EN');

  const setLanguage = (language: string) => {
    switch (language) {
      case 'EN':
        setTranslations(EN);
        setLang('EN');
        break;
      case 'ES':
        setTranslations(ES);
        setLang('ES');
        break;
      default:
        setTranslations(EN);
        setLang('EN');
        break;
    }
  };

  return (
    <LanguageContext.Provider value={{ translations, setLanguage, lang }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
