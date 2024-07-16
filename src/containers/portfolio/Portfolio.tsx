import React, { useState } from 'react';
import FilterMenu from '../menu/FilterMenu';
import ProjectList from '../../components/ProjectList';
import { useLanguage } from "../../locales/LanguageContext";

//import of all project images
import ImageRecognition from '../../assets/projects/imageRecognition.png';
import RayTracer from '../../assets/projects/raytracer.png';
import P2PTransfer from '../../assets/projects/P2P.png';
import AppeHairdryer from '../../assets/projects/AppleDryer.png';
import GG from '../../assets/projects/GG.png';
import Tutto from '../../assets/projects/tutto.png';
import ForeverGreen from '../../assets/projects/forevergreen.png';
import Sen from '../../assets/projects/sen.png';
import QR from '../../assets/projects/QR.png';
import Conversor from '../../assets/projects/Conversor.png';
import WoodenLamp from '../../assets/projects/woodenlamp.png';
import BlogCafe from '../../assets/projects/BlogCafe.png';
import CubyTryx from '../../assets/projects/CubyTryx.png';
import RHInteractivo from '../../assets/projects/RHInteractivo.png';
import Confidential from '../../assets/projects/Confidencial.png';
import Jade from '../../assets/projects/Jade.png';
import Flowforce from '../../assets/projects/Flowforce.png';
import Encripter from '../../assets/projects/Encripter.png';
import Project66 from '../../assets/projects/Project66.png';
import Movies from '../../assets/projects/Movies.png';

const Portfolio = () => {
    const { translations } = useLanguage();

    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'UXUI', 'Programming', 'VisualDesign', 'AI', 'ProductDesign'];

    const projects = [
        {
          title: translations.IR,
          description: translations.IRdescription,
          skills: [translations.IRhabilities[0], translations.IRhabilities[1], translations.IRhabilities[2]],
          types: ['Programming', 'AI'],
          githubLink: 'https://github.com/emmanuelraob/Satellite_image_recognition_AI',
          imageUrl: ImageRecognition,
        },
        {
          title: translations.RT,
          description: translations.RTdescription,
          skills: [translations.RThabilities[0], translations.RThabilities[1], translations.RThabilities[2]],
          types: ['Programming'],
          githubLink: 'https://github.com/emmanuelraob/Proyecto-3-progra-2',
          imageUrl: RayTracer,
        },
        {
          title: translations.P2P,
          description: translations.P2Pdescription,
          skills: [translations.P2Phabilities[0], translations.P2Phabilities[1], translations.P2Phabilities[2]],
          types: ['Programming', 'UXUI', 'VisualDesign'],
          projectLink: 'https://www.behance.net/gallery/191934721/P2P-Transfer-in-real-time',
          imageUrl: P2PTransfer,
        },
        {
          title: translations.AH,
          description: translations.AHdescription,
          skills: [translations.AHhabilities[0], translations.AHhabilities[1], translations.AHhabilities[2]],
          types: ['ProductDesign'],
          projectLink: 'https://www.behance.net/gallery/151416471/Diseno-de-productos-en-conjunto',
          imageUrl: AppeHairdryer,
        },
        {
          title: translations.GGG,
          description: translations.GGGdescription,
          skills: [translations.GGGhabilities[0], translations.GGGhabilities[1], translations.GGGhabilities[2], translations.GGGhabilities[3]],
          types: ['ProductDesign', 'UXUI'],
          projectLink: 'https://www.behance.net/gallery/151422011/Diseno-de-un-guante-inteligente',
          imageUrl: GG,
        },
        {
          title: translations.TBT,
          description: translations.TBTdescription,
          skills: [translations.TBThabilities[0], translations.TBThabilities[1]],
          types: ['ProductDesign'],
          projectLink: 'https://www.behance.net/gallery/191606859/Tutto-Baileys',
          imageUrl: Tutto,
        },
        {
          title: translations.RH,
          description: translations.RHdescription,
          skills: [translations.RHhabilities[0]],
          types: ['VisualDesign'],
          projectLink: '',
          imageUrl: RHInteractivo,
        },
        {
          title: translations.JM,
          description: translations.JMdescription,
          skills: [translations.JMhabilities[0], translations.JMhabilities[1], translations.JMhabilities[2]],
          types: ['UXUI', 'VisualDesign'],
          projectLink: 'https://www.behance.net/gallery/121979911/Propuesta-pagina-web-museo-de-jade',
          imageUrl: Jade,
        },
        {
          title: translations.FG,
          description: translations.FGdescription,
          skills: [translations.FGhabilities[0], translations.FGhabilities[1], translations.FGhabilities[2]],
          types: ['UXUI', 'VisualDesign'],
          projectLink: 'https://www.behance.net/gallery/191605465/FOREVERGREEN',
          imageUrl: ForeverGreen,
        },
        {
          title: translations.MR,
          description: translations.MRdescription,
          skills: [translations.MRhabilities[0], translations.MRhabilities[1], translations.MRhabilities[2]],
          types: ['AI'],
          githubLink: 'https://github.com/emmanuelraob/Prediction-Model/tree/main',
          imageUrl: Movies,
        },
        {
          title: translations.SK,
          description: translations.SKdescription,
          skills: [translations.SKhabilities[0], translations.SKhabilities[1], translations.SKhabilities[2]],
          types: ['ProductDesign', 'UXUI'],
          projectLink: 'https://www.behance.net/gallery/151416471/Diseno-de-productos-en-conjunto',
          imageUrl: Sen,
        },
        {
          title: translations.WL,
          description: translations.WLdescription,
          skills: [translations.WLhabilities[0]],
          types: ['ProductDesign'],
          projectLink: 'https://www.behance.net/gallery/151416471/Diseno-de-productos-en-conjunto',
          imageUrl: WoodenLamp,
        },
        {
          title: translations.QR,
          description: translations.QRdescription,
          skills: [translations.QRhabilities[0], translations.QRhabilities[1], translations.QRhabilities[2]],
          types: ['Programming', 'VisualDesign'],
          githubLink: 'https://github.com/emmanuelraob/Generador-QR',
          projectLink: 'https://emmanuelraob.github.io/Generador-QR/',
          imageUrl: QR,
        },
        {
          title: translations.NBC,
          description: translations.NBCdescription,
          skills: [translations.NBChabilities[0], translations.NBChabilities[1], translations.NBChabilities[2]],
          types: ['Programming', 'VisualDesign'],
          githubLink: 'https://github.com/emmanuelraob/ConversorDeBasesNumericas',
          projectLink: 'https://emmanuelraob.github.io/ConversorDeBasesNumericas/',
          imageUrl: Conversor,
        },
        {
          title: translations.CB,
          description: translations.CBdescription,
          skills: [translations.CBhabilities[0], translations.CBhabilities[1], translations.CBhabilities[2]],
          types: ['Programming'],
          projectLink: 'https://htmlcsssample.netlify.app/',
          imageUrl: BlogCafe,
        },
        {
          title: translations.RTG,
          description: translations.RTGdescription,
          skills: [translations.RTGhabilities[0], translations.RTGhabilities[1]],
          types: ['Programming', 'VisualDesign', 'UXUI'],
          projectLink: 'https://aipepito.itch.io/cuby-tryx',
          imageUrl: CubyTryx,
        },
        {
          title: translations.P66,
          description: translations.P66description,
          skills: [translations.P66habilities[0], translations.P66habilities[1]],
          types: ['UXUI'],
          projectLink: '',
          imageUrl: Project66,
        },
        {
          title: translations.RR,
          description: translations.RRdescription,
          skills: [translations.RRhabilities[0]],
          types: ['UXUI'],
          projectLink: '',
          imageUrl: Confidential,
        },
        {
          title: translations.FF,
          description: translations.FFdescription,
          skills: [translations.FFhabilities[0]],
          types: ['VisualDesign'],
          projectLink: 'https://www.behance.net/gallery/203420369/FLOWFORCE',
          imageUrl: Flowforce,
        },
        {
          title: translations.ENC,
          description: translations.ENCdescription,
          skills: [translations.ENChabilities[0], translations.ENChabilities[1], translations.ENChabilities[2]],
          types: ['Programming'],
          githubLink: 'https://github.com/emmanuelraob/Encriptador',
          projectLink: 'https://emmanuelraob.github.io/Encriptador/',
          imageUrl: Encripter,
        }
      ];
      
      

    return (
        <div className="font-open-sans ml-[56px] text-text-20 mr-[56px] mb-6">
            <h2 className="font-montserrat font-bold text-text-42 mt-[45px] mb-[56px] ">{translations.Resume}</h2>
            <FilterMenu filters={filters} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
            <ProjectList projects={projects} activeFilter={activeFilter} />
        </div>
    )
}
export default Portfolio