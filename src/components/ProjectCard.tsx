import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';


interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  githubLink?: string;
  projectLink?: string;
  imageUrl: string;
  types: string[];
}



const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, skills, githubLink, projectLink, imageUrl, types}) => {
    const linka = () => {
        if(githubLink){
            return githubLink
        }else if(projectLink){
            return projectLink
        }
    }
    return (
    <a href={linka()}  target="_blank" rel="noopener noreferrer" >
        <div className="bg-grey-4 text-white p-4 rounded-lg border border-grey-3 h-full hover:border-primary hover:border-3 transition duration-300 ease-in-out"> 
            <div className="relative">
                <img src={imageUrl} alt={`${title}`} className="w-full h-[250px] object-cover mb-4 rounded-lg" />
                <div className="absolute top-2 right-2 space-y-2">
                    {githubLink && (
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className=" bg-white hover:bg-primary h-[45px] w-[45px] rounded-full flex items-center justify-center ">
                        <GitHubIcon fontSize="large" className="text-grey-1" />
                    </a>)}
                    {projectLink && (
                    <a href={projectLink} target="_blank" rel="noopener noreferrer" className=" bg-white hover:bg-primary h-[45px] w-[45px] rounded-full flex items-center justify-center ">
                        <LinkIcon fontSize="large" className="text-grey-1" />
                    </a>)}
                </div>
                
                
            </div>
            <h3 className="text-text-24 font-bold mb-2">{title}</h3>
            <p className="text-text-16 mb-4 break-words">{description}</p>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                <span key={skill} className="bg-grey-2 px-2 py-1 rounded-[4px] text-text-14 border border-grey-3 opacity-70">
                    {skill}
                </span>
                ))}
            </div>
        </div>
    </a>
  );
};

export default ProjectCard;
