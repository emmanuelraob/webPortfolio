import React from 'react';
import { useLanguage } from '../locales/LanguageContext';

const ResumeDownloadButton: React.FC = () => {
  const { translations, lang } = useLanguage(); // Suponiendo que `lang` contiene el idioma actual
  // Define las URLs de los archivos PDF
  const cvUrl = lang === 'EN' ? '/Emmanuel_Ramírez_cv_en.pdf' : '/Emmanuel_Ramírez_cv_es.pdf';

  return (
    <a href={cvUrl} download className="block">
      <button className="bg-primary text-grey-1 p-[16px] font-bold rounded-[8px] text-text-24 mb-[45px]">
        <p>{translations.downloadButton}</p>
      </button>
    </a>
  );
};

export default ResumeDownloadButton;
