import ProjectCard from '../components/UI/ProjectCard'

const projects = [
  {
    name: 'Social Task App',
    url: 'https://peaceful-beach-14774-2857744df451.herokuapp.com/',
    img: 'src/assets/tasks-img.png',
    github: 'https://github.com/MrDietCola/Social-Task-App',
  },
  {
    name: 'Event and Hotel Finder',
    url: 'https://chart099.github.io/Bootcamp-Project-1/',
    img: 'src/assets/image.png',
    github: 'https://github.com/chart099/Bootcamp-Project-1',
  },
  // {
  //   name: ,
  //   url: ,
  //   img: ,
  //   github: ,
  // },
  // {
  //   name: ,
  //   url: ,
  //   img: ,
  //   github: ,
  // },
  // {
  //   name: ,
  //   url: ,
  //   img: ,
  //   github: ,
  // },
  // {
  //   name: ,
  //   url: ,
  //   img: ,
  //   github: ,
  // },
]

export default function PortfolioPage() {
  return (
    <div className='d-flex m-5 justify-content-around flex-wrap'>
      <ProjectCard projects={projects}/>
    </div>
  )
}
