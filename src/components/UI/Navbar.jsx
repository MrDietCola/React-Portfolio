import { useState, useRef } from 'react';
import { motion } from "framer-motion"
import logoMp4 from '../../assets/headerlogoanimation.mp4';
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github-mark.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom';

export default function Nav({ links }) {
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
    <nav className="navbar fixed-top justify-content-center">
      <div className='navbar d-flex justify-content-around mw'>
        {/* logo with animation */}
        <Link>
          <video
            className='logo' 
             
            autoPlay 
            controls={false} 
            muted
            ref={videoRef}
            playsInline 
            onMouseOver={play}
          ><source src={logoMp4} type="video/mp4" /></video>
        </Link>
        <div className="d-flex justify-content-start px-3" id="">
          {links.map((link) => link)}
        </div>
        <div id='socials'>        
          <motion.button
           whileHover={{ scale: 1.1, rotate: 360}}
           whileTap={{ scale: 0.9,  }}
           transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
           className="header-icon pe-2" 
          >
           <a className='header-icon' target="_blank" href="https://github.com/Seidler93"><FontAwesomeIcon icon={faGithub}/></a>
          </motion.button><motion.button
           whileHover={{ scale: 1.1, rotate: 360}}
           whileTap={{ scale: 0.9,  }}
           transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
           className="header-icon pe-2" 
          >
           <a className='header-icon' target="_blank" href="https://www.linkedin.com/in/a-j-seidler-a50556b2/"><FontAwesomeIcon icon={faLinkedin}/></a>
          </motion.button>
        </div>
      </div>
    </nav>
  );
}


