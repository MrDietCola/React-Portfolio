// Importing all images
import ProjectCard from '../components/UI/ProjectCard'
import socialTaskApp from '../assets/tasks-img.png'
import enentFinder from '../assets/image.png'
import employeeTracker from '../assets/Screenshot25.png'
import textEditor from '../assets/Screenshot32.png'
import noteTaker from '../assets/Screenshot20.png'
import ecommerce from '../assets/Screenshot27.png'

// Array of projects
const projects = [
  {
    name: 'Full-Stack Social Task App',
    url: 'https://peaceful-beach-14774-2857744df451.herokuapp.com/',
    img: socialTaskApp,
    github: 'https://github.com/Seidler93/Social-Task-App',
  },
  {
    name: 'Event and Hotel Finder',
    url: 'https://chart099.github.io/Bootcamp-Project-1/',
    img: enentFinder,
    github: 'https://github.com/chart099/Bootcamp-Project-1',
  },
  {
    name: 'NoSQL Employee Tracker',
    url: 'https://youtu.be/jyVmS1fM8W0',
    img: employeeTracker,
    github: 'https://github.com/Seidler93/Employee-tracker',
  },
  {
    name: 'PWA Text Editor',
    url: 'https://limitless-inlet-49962-fdf6a772dad4.herokuapp.com/',
    img: textEditor,
    github: 'https://github.com/Seidler93/PWA-Text-Editor',
  },
  {
    name: 'Full-Stack Note Taker',
    url: 'https://gentle-coast-49570-f78783b9d58f.herokuapp.com/notes',
    img: noteTaker,
    github: 'https://github.com/Seidler93/Note-taker-2.0',
  },
  {
    name: 'MONGODB Ecommerce',
    url: 'https://www.youtube.com/watch?v=7q9dMxxWjxY&ab_channel=AJSeidler',
    img: ecommerce,
    github: 'https://github.com/Seidler93/Ecommerce',
  },
]

// React component for the Portfolio Page
export default function PortfolioPage() {
  return (
    <div className='projects'>
      {/* Heading for the Projects section */}
      <h2 className='text-center project-header'>Projects</h2>

      {/* Container for project cards, using flex layout and centering */}
      <div className='d-flex justify-content-center flex-wrap py-3'>
        {/* Rendering the ProjectCard component and passing projects as a prop */}
        <ProjectCard projects={projects} />
      </div>
    </div>
  );
}

