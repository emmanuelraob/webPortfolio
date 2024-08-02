import React from 'react';
import { useLanguage } from '../locales/LanguageContext';

const ResumeDownloadButton: React.FC = () => {
  const { translations, lang } = useLanguage(); 
  
  const cvUrl = lang === 'EN' ? 'https://emmanuelraob.github.io/webPortfolio/Emmanuel_Ram%C3%ADrez_cv_en.pdf' : 'https://emmanuelraob.github.io/webPortfolio/Emmanuel_Ram%C3%ADrez_cv_es.pdf';
  

  return (
    <a href={cvUrl} download className="block">
      <button className="bg-primary text-grey-1 p-[16px] font-bold rounded-[8px] text-text-24 mb-[45px]">
        <p>{translations.downloadButton}</p>
      </button>
    </a>
  );
};

export default ResumeDownloadButton;


