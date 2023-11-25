export default function ProjectCard(props) {
  return props.projects.map((project, index) => (
    <div key={index}>
      <a href={project.url} target="_blank"><img src={project.img} alt="" className="project-img"/></a>
    </div>
  ));
}

  
  
  
  