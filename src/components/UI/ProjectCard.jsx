import github from '../../assets/github-mark.png'
import SkillCard from '../UI/SkillCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faJs, faReact, faNodeJs, } from "@fortawesome/free-brands-svg-icons"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"

import { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function ProjectCard({project}) {
  const [isInFocus, setIsInFocus] = useState(false);
  const controls = useAnimation();
  const divRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = divRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsInFocus(isVisible);
      }
    };

    const initialCheck = () => {
      handleScroll();
      controls.start(isInFocus ? { scale: 1 } : { scale: .5 });
    };

    // Initial check when the component mounts
    initialCheck();


    // Attach the event listener to the scroll event
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInFocus, controls]);

  return (
    // <div className='d-flex project-card mb-5'>
    //   <a href={project.url} target="_blank" className="rel project-img-container">
    //     <img src={project.img} alt="" className="project-img "/>
    //     <div className="100w 100h justify-content-center align-items-center portfolio-link my-3">
    //       <a className="p-2" href={project.url} target="_blank">{project.name}</a>
    //       <a className="p-2" href={project.github} target="_blank"><img className="logo-sm" src={github} alt="" /></a>
    //     </div>
    //   </a>
    //   <div className='project-text '>
    //     <h2>{project.name}</h2>
    //     <h5>{project.about}</h5>
    //     <p>{project.description}</p>
    //     <div className='skills-container justify-content-start'>            
    //       {/* Professional details */}
    //       {project.skills.map((skill, index)=> <SkillCard skill={skill} index={index}/>)}           
    //     </div>
    //   </div>
    // </div>
    <motion.div
      className='d-flex project-card mb-5'
      ref={divRef}
      initial={{ scale: .75 }}
      animate={controls}
      transition={{ duration: 0.3 }}
      
    >
      <a href={project.url} target="_blank" className="rel project-img-container">
        <img src={project.img} alt="" className="project-img "/>
        <div className="100w 100h justify-content-center align-items-center portfolio-link my-3">
          <a className="p-2" href={project.url} target="_blank">{project.name}</a>
          <a className="p-2" href={project.github} target="_blank"><img className="logo-sm" src={github} alt="" /></a>
        </div>
      </a>
      <div className='project-text '>
        <h2>{project.name}</h2>
        <h5>{project.about}</h5>
        <p>{project.description}</p>
        <div className='skills-container justify-content-start'>            
          {/* Professional details */}
          {project.skills.map((skill, index)=> <SkillCard skill={skill} index={index}/>)}           
        </div>
      </div>
    </motion.div>
  )
}

  
  
  
  