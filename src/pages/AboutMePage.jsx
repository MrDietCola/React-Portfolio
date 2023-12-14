// Importing the portrait image from the assets folder
import { useState, useRef } from 'react';
import portrait from '../assets/port.webp';
import { motion } from "framer-motion"
import logoMp4 from '../assets/logoanimation.mp4';
import SkillCard from '../components/UI/SkillCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faJs, faReact, faNodeJs, } from "@fortawesome/free-brands-svg-icons"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"


// React component for the About Me page
export default function AboutMePage() {
  const skills = [
    {name: 'Git', logo: faGithub},
    {name: 'JS', logo: faJs},
    {name: 'React', logo: faReact},
    {name: 'Node.js', logo: faNodeJs},
    {name: 'SQL', logo: faDatabase},
  ]
  const videoRef = useRef(null);
  const play = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    // if (videoRef.current) {
    //   videoRef.current.currentTime = 0; // Set the playback position to the beginning
    //   videoRef.current.play();
    // }
  };
  return (
    <>
      <div className='bg-black avoid-header width100'>
        {/* hero */}
        <div className=' px-4 d-flex justify-content-between bg-black mw width100'>
          {/* Displaying the portrait image */}
          <img src={portrait} alt="Portrait" className="abt-me-port" />
          {/* animated logo */}
          <div className='d-flex justify-content-center align-items-center logo-large-container'>
            <video
              className='logo-large'             
              autoPlay 
              controls={false} 
              muted
              ref={videoRef}
              playsInline 
              onMouseOver={play}
              >
                <source src={logoMp4} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      {/* about me */}
      <div className='width100 about-content about-content'>
        <div className="px-4 about-me width100 mw">
          <h2>ABOUT ME</h2>
          {/* Paragraph containing information about me */}
          <p className='about-me-p ps-4'>
            {/* Brief description */}
            Experienced coding bootcamp graduate with an extensive background in various programming languages, developing applications, and building websites from the ground up. Specializes in JavaScript and React. With over 6 years in a management position, my professional strengths include a detail-oriented mindset, a creative approach to problem-solving, excellent communication skills, and being a proficient multitasker who works well under pressure and within timelines.
          </p>
          <div className='skills-container'>            
            {/* Professional details */}
            {skills.map((skill, index)=> <SkillCard skill={skill} index={index}/>)}           
          </div>
        </div>
      </div>
    </>
  );
}
