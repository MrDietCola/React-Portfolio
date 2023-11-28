import github from '../assets/github-mark.png'

export default function ProjectCard(props) {
  return props.projects.map((project, index) => (
    <div key={index} className="px-5 py-3 ">
      <a href={project.url} target="_blank" className="rel">
        <img src={project.img} alt="" className="project-img "/>
        <div className="100w 100h justify-content-center align-items-center portfolio-link mx-5 my-3">
          <a className="p-2" href={project.url} target="_blank">{project.name}</a>
          <a className="p-2" href={project.github} target="_blank"><img className="logo-sm" src={github} alt="" /></a>
        </div>
      </a>
    </div>
  ));
}

  
  
  
  