import { useLanguage } from "../../locales/LanguageContext";

import ProfilePhoto from "../../assets/profile/photomid.png"
import ResumeDownloadButton from "../../components/Download";

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Resume = () => {
    const { translations } = useLanguage();

    const Habilities = translations.Habilities;
    const Tools = translations.Tools;
    const Languages = translations.Languages;
    const Contact = translations.Contact;
    

    return (
        <div className="font-open-sans ml-[56px] text-text-20 mr-[56px]">
            <h2 className="font-montserrat font-bold text-text-42 mt-[45px] mb-[56px] ">{translations.Resume}</h2>
            
            <div className="max-w-[900px] w-full mx-auto">
                <ResumeDownloadButton/>

                <div className="information flex justify-between items-center flex-col-reverse xs:flex-row">
                    <div className="text mr-[16px]">
                        <h2 className="font-bold text-text-30 mb-[16px]">{translations.name}</h2>
                        <p>{translations.resume_description}</p>
                        <div className="">
                            <div className="flex gap-[16px] mt-[24px]">
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
                    </div>
                    <img src={ProfilePhoto} alt="profile"/>
                    
                </div>

                <h2 className="font-bold text-text-30 mt-[45px]">{translations.Experience}</h2>
                
                <div className="flex gap-[16px] mt-[45px] items-center">
                    <h3 className="font-bold text-text-24 mb-[16px]">Kuarctech</h3>
                    <h3 className="text-text-24 mb-[16px]">{translations.EX1}</h3>
                    <h3 className="font-light text-text-20 mb-[16px]">{translations.EX1date}</h3>
                </div>
                <ul className="list-disc text-text-20 ml-8">
                    <li>{translations.EX11}</li>
                    <li>{translations.EX12}</li>
                    <li>{translations.EX13}</li>
                    <li>{translations.EX14}</li>
                    <li>{translations.EX15}</li>
                    <li>{translations.EX16}</li>
                    <li>{translations.EX17}</li>
                </ul>

                <div className="flex gap-[16px] mt-[45px] items-center">
                    <h3 className="font-bold text-text-24 mb-[16px]">Freelancer</h3>
                    <h3 className="font-light text-text-20 mb-[16px]">{translations.EX2date}</h3>
                </div>
                <ul className="list-disc text-text-20 ml-8">
                    <li>{translations.EX21}</li>
                    <li>{translations.EX22}</li>
                    <li>{translations.EX23}</li>
                    <li>{translations.EX24}</li>
                    <li>{translations.EX25}</li>
                </ul>

                <div className="flex gap-[16px] mt-[45px] items-center">
                    <h3 className="font-bold text-text-24 mb-[16px]">Walmart</h3>
                    <h3 className="text-text-24 mb-[16px]">{translations.EX3}</h3>
                    <h3 className="font-light text-text-20 mb-[16px]">{translations.EX3date}</h3>
                </div>
                <ul className="list-disc text-text-20 ml-8">
                    <li>{translations.EX31}</li>
                    <li>{translations.EX32}</li>
                    <li>{translations.EX33}</li>
                    <li>{translations.EX34}</li>
                    <li>{translations.EX35}</li>
                    <li>{translations.EX36}</li>
                    <li>{translations.EX37}</li>
                </ul>

                <h2 className="font-bold text-text-30 mt-[85px]">{translations.Education}</h2>

                <div className="flex gap-[16px] mt-[45px] items-center">
                    <h3 className="font-bold text-text-24 mb-[8px]">{translations.ED1}</h3>
                    <h3 className="font-light text-text-20 mb-[8px]">{translations.ED1date}</h3>
                </div>
                <p className="text-text-20">{translations.ED1place}</p>

                <div className="flex gap-[16px] mt-[45px] items-center">
                    <h3 className="font-bold text-text-24 mb-[8px]">{translations.ED2}</h3>
                    <h3 className="font-light text-text-20 mb-[8px]">{translations.ED2date}</h3>
                </div>
                <p className="text-text-20">{translations.ED2place}</p>

                <div className="flex gap-[16px] mt-[45px] items-center">
                    <h3 className="font-bold text-text-24 mb-[8px]">{translations.ED3}</h3>
                    <h3 className="font-light text-text-20 mb-[8px]">{translations.ED3date}</h3>
                </div>
                <p className="text-text-20">{translations.ED3place}</p>

                <div className="flex gap-[16px] mt-[45px] items-center">
                    <h3 className="font-bold text-text-24 mb-[8px]">{translations.ED4}</h3>
                    <h3 className="font-light text-text-20 mb-[8px]">{translations.ED4date}</h3>
                </div>
                <p className="text-text-20">{translations.ED4place}</p>



                <h2 className="font-bold text-text-30 mt-[85px]">{translations.HabilitiesTittle}</h2>
                <ul className="list-disc list-inside ml-4 mt-[45px] text-text-20">
                    {Habilities.map((hability, index) => (
                        <li key={index}>{hability}</li>
                    ))}
                </ul>

                <h2 className="font-bold text-text-30 mt-[85px]">{translations.ToolsTittle}</h2>
                <ul className="list-disc list-inside ml-4 mt-[45px] text-text-20">
                    {Tools.map((tool, index) => (
                        <li key={index}>{tool}</li>
                    ))}
                </ul>

                <h2 className="font-bold text-text-30 mt-[85px]">{translations.LanguagesTittle}</h2>
                <ul className="list-disc list-inside ml-4 mt-[45px] text-text-20">
                    {Languages.map((lan, index) => (
                        <li key={index}>{lan}</li>
                    ))}
                </ul>

                <h2 className="font-bold text-text-30 mt-[85px]">{translations.ContactTittle}</h2>
                <ul className="list-disc list-inside ml-4 mt-[45px] text-text-20 mb-[85px]">
                    {Contact.map((contact, index) => (
                        <li key={index}>
                        {contact.startsWith('http') || contact.includes('linkedin.com') ? (
                          <a href={contact.startsWith('http') ? contact : `https://${contact}`} target="_blank" rel="noopener noreferrer" className="text-primary underline opacity-80">
                            {contact}
                          </a>
                        ) : (
                          contact
                        )}
                      </li>
                    ))}
                </ul>

                

            </div>

            
        </div>
    )  
}

export default Resume;