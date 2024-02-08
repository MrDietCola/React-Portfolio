// Importing the portrait image from the assets folder
import { useState, useRef, useEffect } from 'react';
import portrait from '../assets/portvid.mp4';
import { motion, useAnimation, useInView } from "framer-motion"
import logoMp4 from '../assets/logoanimation.mp4';
import SkillCard from '../components/UI/SkillCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faJs, faReact, faNodeJs, } from "@fortawesome/free-brands-svg-icons"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
import { useLayoutEffect } from 'react';
import Carousel from '../components/UI/SkillCarousel';

// React component for the About Me page
export default function AboutMePage() {
  const skills = [
    {name: 'Git', logo: 'github'},
    {name: 'JS', logo: 'js'},
    {name: 'React', logo: 'react'},
    {name: 'Node.js', logo: 'nodeJS'},
    {name: 'SQL', logo: 'sql'},
    {name: 'MongoDB', logo: 'mongoDB'},
    {name: 'Express', logo: 'express'},
    {name: 'RESTful APIs', logo: 'rest'},
    {name: 'GraphQL', logo: 'graphQL'},
    {name: 'Firebase', logo: 'firebase'},
    {name: 'Bootstrap', logo: 'bootstrap'},
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

  const controls = useAnimation();
  // const [ref, inView] = useInView({
  //   triggerOnce: true, // Trigger the animation once
  // });

  
  const viewref = useRef(null)
  const isInView = useInView(viewref)
  
  useEffect(() => {
    if (isInView) {
      controls.start({ scale: 1 });
    } else {
      controls.start({ scale: .8 });
    }
  }, [isInView]);
  
  return (
    <>
      <div className='bg-black avoid-header width100 hero d-flex flex-column align-items-center'>
        {/* hero */}
        <div className=' px-4 d-flex justify-content-between bg-black mw width100'>
          {/* Displaying the portrait image */}
          {/* <img src={portrait} alt="Portrait" className="abt-me-port" /> */}
          <video
              className='abt-me-port'             
              autoPlay 
              controls={false} 
              muted
              loop={true}
              playsInline 
              onMouseOver={play}
              >
                <source src={portrait} type="video/mp4" />
            </video>
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
        {/* <Carousel skills={skills}/> */}
      </div>
      {/* about me */}
      <motion.div
      ref={viewref}
      initial={{ scale: .8 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className='width100 about-content about-content py-4'
    >
      <div className="px-4 about-me width100 mw">
        <h2>ABOUT ME</h2>
        {/* Paragraph containing information about me */}
        <p className='about-me-p ps-4'>
          {/* Brief description */}
          Experienced coding bootcamp graduate with an extensive background in various programming languages, developing applications, and building websites from the ground up. Specializes in JavaScript and React. With over 6 years in a management position, my professional strengths include a detail-oriented mindset, a creative approach to problem-solving, excellent communication skills, and being a proficient multitasker who works well under pressure and within timelines.
        </p>
        <div className='skills-container justify-content-start'>            
          {/* Professional details */}
          {skills.map((skill, index)=> <SkillCard skill={skill} index={index}/>)}           
        </div>
      </div>
    </motion.div>
    </>
  );
}
