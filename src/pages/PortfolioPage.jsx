import ProjectCard from '../components/UI/ProjectCard'
import socialTaskApp from '../assets/task-img.png'

const projects = [
  {
    name: 'Full-Stack Social Task App',
    url: 'https://peaceful-beach-14774-2857744df451.herokuapp.com/',
    img: socialTaskApp,
    github: 'https://github.com/MrDietCola/Social-Task-App',
  },
  {
    name: 'Event and Hotel Finder',
    url: 'https://chart099.github.io/Bootcamp-Project-1/',
    img: 'src/assets/image.png',
    github: 'https://github.com/chart099/Bootcamp-Project-1',
  },
  {
    name: 'NoSQL Employee Tracker',
    url: 'https://youtu.be/jyVmS1fM8W0',
    img: 'src/assets/Screenshot (25).png',
    github: 'https://github.com/MrDietCola/Employee-tracker',
  },
  {
    name: 'PWA Text Editor',
    url: 'https://limitless-inlet-49962-fdf6a772dad4.herokuapp.com/',
    img: 'src/assets/Screenshot (32).png',
    github: 'https://github.com/MrDietCola/PWA-Text-Editor',
  },
  {
    name: 'Full-Stack Note Taker',
    url: 'https://gentle-coast-49570-f78783b9d58f.herokuapp.com/notes',
    img: 'src/assets/Screenshot (20).png',
    github: 'https://github.com/MrDietCola/Note-taker-2.0',
  },
  {
    name: 'MONGODB Ecommerce',
    url: 'https://www.youtube.com/watch?v=7q9dMxxWjxY&ab_channel=AJSeidler',
    img: 'src/assets/Screenshot (27).png',
    github: 'https://github.com/MrDietCola/Ecommerce',
  },
]

export default function PortfolioPage() {
  return (
    <>
      <h2 className='text-center pt-5'>Projects</h2>
      <div className='d-flex m-5 justify-content-center flex-wrap'>
        <ProjectCard projects={projects}/>
      </div>
    </>
  )
}
