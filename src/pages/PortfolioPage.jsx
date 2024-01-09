// Importing all images
import ProjectCard from '../components/UI/ProjectCard'
import socialTaskApp from '../assets/tasks-img.png'
import enentFinder from '../assets/image.png'
import employeeTracker from '../assets/Screenshot25.png'
import textEditor from '../assets/Screenshot32.png'
import noteTaker from '../assets/Screenshot20.png'
import ecommerce from '../assets/omnicartScreenshot.png'
import sweatcheck from '../assets/sweatcheck2.png'
import { faGithub, faLinkedin, faJs, faReact, faNodeJs, } from "@fortawesome/free-brands-svg-icons"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"
import { Icon } from '@iconify/react';

// Array of projects
const projects = [
  {
    name: 'Sweat Check',
    about: 'Full-Stack Fitness Tracker and Marketplace',
    url: 'https://sweat-check-1af5b01668d2.herokuapp.com/',
    img: sweatcheck,
    github: 'https://github.com/Seidler93/Sweat-Check',
    description: 'This mobile-first app empowers users to create and discover workouts, while seamlessly tracking their fitness journey. Tailored for smaller screens and touch interfaces, it offers the flexibility to design and share custom workouts. Users can also explore a marketplace for curated programs, eliminating the guesswork in crafting personalized routines. Whether creating, sharing, or finding workouts, the app fosters a community-driven fitness experience.',
    skills: [
      {name: 'JS', logo: 'js'},
      {name: 'React', logo: 'react'},
      {name: 'Node.js', logo: 'nodeJS'},
      {name: 'MongoDB', logo: 'mongoDB'},
      {name: 'Express', logo: 'express'},
      {name: 'GraphQL', logo: 'graphQL'},
    ]
  },
  {
    name: 'Omnicart',
    about: 'Full-Stack Ecommerce website for buying clothes',
    url: 'https://safe-cove-66702-0245eab30949.herokuapp.com/',
    img: ecommerce,
    github: 'https://github.com/Seidler93/React-Ecommerce',
    description: 'This application is designed to represent seamless navigation through an e-commerce website. Users can easily explore the platform using intuitive features to add  items to their cart and view shopping history. With a focus on user-friendly interactions, the application showcases fundamental functionalities commonly found with an online store.',
    skills: [
      {name: 'JS', logo: 'js'},
      {name: 'React', logo: 'react'},
      {name: 'Node.js', logo: 'nodeJS'},
      {name: 'MongoDB', logo: 'mongoDB'},
      {name: 'Express', logo: 'express'},
      {name: 'GraphQL', logo: 'graphQL'},
    ]
  },
  {
    name: 'Get Sh*t Done',
    about: 'Full-Stack social task app',
    url: 'https://peaceful-beach-14774-2857744df451.herokuapp.com/',
    img: socialTaskApp,
    github: 'https://github.com/Seidler93/Social-Task-App',
    description: 'This website goes above the typical task tracker, transforming into a social platform where users share their current tasks and seek community assistance. Packed with social app features, it enables users to create posts, build connections, control visibility (public/private), comment on tasks, and search for specific tasks through tags or keywords. It fosters a collaborative environment, redefining task management with a community-centric approach.',
    skills: [
      {name: 'JS', logo: 'js'},
      {name: 'SQL', logo: 'sql'},
      {name: 'Node.js', logo: 'nodeJS'},
      {name: 'Express', logo: 'express'},
      {name: 'RESTful APIs', logo: 'rest'},
      {name: 'SQL', logo: 'sql'},
    ]
  },
  {
    name: 'Event and Hotel Finder',
    about: 'Front end app with fundemantal API usage',
    url: 'https://chart099.github.io/Bootcamp-Project-1/',
    img: enentFinder,
    github: 'https://github.com/chart099/Bootcamp-Project-1',
    description: 'This is an app that allows the user to search for an event by city name, event or artist name and then displays the relevent events. Once the events are shown, the user has the ability to save the event as a favorite and view later using local storage or find a hotel that is near that event location and attached to the saved event.',
    skills: [
      {name: 'JS', logo: 'js'},
      {name: 'Node.js', logo: 'nodeJS'},
      {name: 'RESTful APIs', logo: 'rest'},
      {name: 'SQL', logo: 'sql'},
      {name: 'Express', logo: 'express'},
    ]
  },
  {
    name: 'Employee Tracker',
    about: 'Terminal prompt using inquirer and mySql to show database navigation',
    url: 'https://youtu.be/jyVmS1fM8W0',
    img: employeeTracker,
    github: 'https://github.com/Seidler93/Employee-tracker',
    description: 'This is a terminal prompt to allow the user the ability to navigate through a database of employees and add, remove, update and view employees, roles and departments.',
    skills: [
      {name: 'JS', logo: 'js'},
      {name: 'Node.js', logo: 'nodeJS'},
      {name: 'RESTful APIs', logo: 'rest'},
      {name: 'Express', logo: 'express'},
      {name: 'SQL', logo: 'sql'},
  ]
  },
  {
    name: 'Text Editor',
    about: 'Downloadable PWA text editor',
    url: 'https://limitless-inlet-49962-fdf6a772dad4.herokuapp.com/',
    img: textEditor,
    github: 'https://github.com/Seidler93/PWA-Text-Editor',
    description: 'This is a pwa text editor application that allows the user to download the application and save thier notes offline as well as online using indexedDB and local storage.',
    skills: [
      {name: 'JS', logo: 'js'},
      {name: 'Node.js', logo: 'nodeJS'},
      {name: 'RESTful APIs', logo: 'rest'},
      {name: 'SQL', logo: 'sql'},
      {name: 'Express', logo: 'express'},
    ]
  },
  {
    name: 'Note Taker',
    about: 'Simple Full-Stack app for taking notes',
    url: 'https://gentle-coast-49570-f78783b9d58f.herokuapp.com/notes',
    img: noteTaker,
    github: 'https://github.com/Seidler93/Note-taker-2.0',
    description: 'This is a task saving app that allows the user to create a task that is saved to a server, open up existing notes and delete existing notes.',
    skills: [
      {name: 'JS', logo: 'js'},
      {name: 'Node.js', logo: 'nodeJS'},
      {name: 'SQL', logo: 'sql'},
      {name: 'RESTful APIs', logo: 'rest'},
      {name: 'Express', logo: 'express'},
    ]
  },
  
]

// React component for the Portfolio Page
export default function PortfolioPage() {
  return (
    <div className='projects'>
      {/* Heading for the Projects section */}
      <h2 className='text-center project-header'>Projects</h2>

      {/* Container for project cards, using flex layout and centering */}
      <div className='d-flex flex-column align-items-center justify-content-center py-3 project-container'>
        {/* Rendering the ProjectCard component and passing projects as a prop */}
        {projects.map((project, index) => <ProjectCard key={index} project={project} />)}
      </div>
    </div>
  );
}

