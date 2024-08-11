import React from 'react';

import { useLanguage } from "../../locales/LanguageContext";
import ProfilePhoto from "../../assets/profile/profile photo.png"

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface ProfessionalProfileProps {
    onChangeSection: (section: 'professional_profile' | 'portfolio' | 'resume') => void;
}

const ProfessionalProfile: React.FC<ProfessionalProfileProps> = ({ onChangeSection }) => {
    const { translations } = useLanguage();
    return (
        <div className="font-open-sans ml-[56px] text-text-20 mr-[56px]">
            <h2 className="font-montserrat font-bold text-text-42 mt-[45px] mb-[56px] ">{translations.ProfessionalProfile}</h2>

            <div className="information flex justify-between items-center flex-col-reverse xs:flex-row mb-8">
                <div className="text mr-[16px]">
                    <h2 className="font-bold text-text-30 mb-[16px]">{translations.name}</h2>
                    <p>{translations.resume_description}</p>
                    <div className="">
                        <div className="flex gap-[16px] mt-[24px] mb-[45px]">
                            <button onClick={() => window.location.href = 'mailto:emmanuelraob123@gmail.com'}> 
                                <EmailIcon style={{ fontSize: 35 }}/>
                            </button>
                            <button onClick={() => window.open('https://www.linkedin.com/in/emmanuel-ram%C3%ADrez-design/', '_blank', 'noopener,noreferrer')}> 
                                <LinkedInIcon style={{ fontSize: 35 }}/>
                            </button>
                            <button onClick={() => window.open('https://github.com/emmanuelraob', '_blank', 'noopener,noreferrer')}> 
                                <GitHubIcon style={{ fontSize: 35 }}/>
                            </button>
                            <button onClick={() => window.open('https://Wa.me/+50687060227', '_blank', 'noopener,noreferrer')}> 
                                <WhatsAppIcon style={{ fontSize: 35 }}/>
                            </button>
                        </div>
                    </div>
                    
                    <button className="bg-primary text-grey-1 p-[16px] font-bold rounded-[8px] text-text-24 mb-[45px]"
                    onClick={() => onChangeSection('resume')}>{translations.ViewCV}</button>
                </div>
                <img src={ProfilePhoto} alt="profile"/>
            </div>



            <div className='mb-8'>
                <h3 className=' font-bold text-text-30 mb-[16px]'>{translations.AbilitiesTittle}</h3>

            </div>

            <div className='mb-8'>
                <h3 className=' font-bold text-text-30 mb-[16px]'>{translations.ProjectsTittle}</h3>
                
                <button className="bg-primary text-grey-1 p-[16px] font-bold rounded-[8px] text-text-24 mb-[45px]"
                    onClick={() => onChangeSection('portfolio')}>{translations.ViewPortfolio}
                </button> 

            </div>
            
            <div className='mb-8'>
                <h3 className=' font-bold text-text-30 mb-[16px]'>{translations.CT}</h3>

            </div>



            

            



            
            
        </div>
    )
}
export default ProfessionalProfile