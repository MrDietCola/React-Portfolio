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
            src={logoMp4} 
            autoPlay 
            controls={false} 
            muted
            ref={videoRef}
            onMouseOver={play}
          />
        </Link>
        <div className="d-flex justify-content-start px-3" id="">
          {links.map((link) => link)}
        </div>
        <div id='socials'>        
          <a className="header-icon pe-2" href="https://github.com/Seidler93" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
          <a className="header-icon ps-1" href="https://www.linkedin.com/in/a-j-seidler-a50556b2/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
    </nav>
  );
}


