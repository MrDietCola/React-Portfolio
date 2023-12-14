// Importing the portrait image from the assets folder
import portrait from '../assets/port.webp';

// React component for the About Me page
export default function AboutMePage() {
  return (
    // Container with padding, using flex layout
    <div className="px-4 about-me">
      {/* Displaying the portrait image */}
      <img src={portrait} alt="Portrait" className="abt-me-port" />

      {/* Paragraph containing information about me */}
      <p className="about-me-p">
        {/* Professional details */}
        Full Stack Engineer | JavaScript | React | Node | SQL <br />

        {/* Brief description */}
        Experienced coding bootcamp graduate with an extensive background in various programming languages, developing applications, and building websites from the ground up. Specializes in JavaScript and React. With over 6 years in a management position, my professional strengths include a detail-oriented mindset, a creative approach to problem-solving, excellent communication skills, and being a proficient multitasker who works well under pressure and within timelines.
      </p>
    </div>
  );
}
