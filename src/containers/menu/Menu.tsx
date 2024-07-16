import React, { useState } from 'react';
import { useLanguage } from "../../locales/LanguageContext";
import ProfessionalProfile from '../professional-profile/ProfessionalProfile';
import Portfolio from '../portfolio/Portfolio';
import Resume from '../resume/Resume';

import ProfilePhoto from "../../assets/profile/photo.png"
import PersonIcon from '@mui/icons-material/Person';
import PhotoIcon from '@mui/icons-material/Photo';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';


const Menu: React.FC = () => {
    const { translations, setLanguage } = useLanguage();
    const [selectedSection, setSelectedSection] = useState<'professional_profile' | 'portfolio' | 'resume'>('portfolio');
    const [selectedLanguage, setSelectedLanguage] = useState<'EN' | 'ES'>('EN'); 


    const renderSection = () => {
        switch (selectedSection) {
          case 'professional_profile':
            return <ProfessionalProfile />;
          case 'portfolio':
            return <Portfolio />;
          case 'resume':
            return <Resume />;
          default:
            return null;
        }
      };

    const handleLanguageChange = (language: 'EN' | 'ES') => {
        setLanguage(language);
        setSelectedLanguage(language);
    };
        

    return (
        <div className="flex min-h-screen w-screen  ">
            <div className="w-[420px] h-screen bg-grey-2 border-r-2 border-grey-3 fixed top-0">
                <h1 className="text-text-20 text-white font-montserrat font-bold p-[56px]">{translations.name}</h1>
                
                
                <div className='ml-[56px] flex flex-col text-left items-start gap-[40px]'>
                    <img src={ProfilePhoto} alt="profile" className='rounded-full'/>
                    
                    {/* 
                    <button
                    className={`flex gap-[15px] items-center font-regular text-white ${selectedSection === 'professional_profile' ? 'text-text-30 opacity-100' : 'text-text-24 opacity-50'}`}
                    onClick={() => setSelectedSection('professional_profile')}
                    >
                    <PersonIcon />
                    {translations.ProfessionalProfile}
                    </button>
                    */}

                    <button
                    className={` flex gap-[15px] items-center font-regular text-white ${selectedSection === 'portfolio' ? 'text-text-30 opacity-100' : 'text-text-24 opacity-50'}`}
                    onClick={() => setSelectedSection('portfolio')}
                    >
                    <PhotoIcon />
                    {translations.Portfolio}
                    </button>

                    <button
                    className={` flex gap-[15px] items-center font-regular text-white ${selectedSection === 'resume' ? 'text-text-30 opacity-100' : 'text-text-24 opacity-50'}`}
                    onClick={() => setSelectedSection('resume')}
                    >
                    <TextSnippetIcon />
                    {translations.Resume}
                    </button>
                </div>

                
                <div className="text-white text-text-20 flex gap-[20px] pl-[56px] pb-[40px] absolute bottom-0">
                    <button
                        className={`${
                        selectedLanguage === 'EN' ? 'opacity-100' : 'opacity-50'
                        }`}
                        onClick={() => handleLanguageChange('EN')}
                    >
                        English
                    </button>
                    <button
                        className={`${
                        selectedLanguage === 'ES' ? 'opacity-100' : 'opacity-50'
                        }`}
                        onClick={() => handleLanguageChange('ES')}
                    >
                        Español
                    </button>
                    </div>
                </div>
                


        <div className="flex-grow bg-grey-1 text-white ml-[420px]">
            {renderSection()}
        </div>
    </div>
        
    )
}
export default Menu