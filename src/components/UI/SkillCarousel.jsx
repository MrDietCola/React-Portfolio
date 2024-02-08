import { useState, useEffect } from 'react';
import SkillCard from './SkillCard';

const Carousel = ({ skills }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Auto-scroll the carousel every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % skills.length);
    }, 1000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="carousel-container">
      <div className='carousel-inner' >
        {skills.map((skill, index) => (
          <div key={index} className='carousel-item' style={{ transform: `translateX(-${currentIndex * 10}%)` }}>
            <SkillCard skill={skill} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
