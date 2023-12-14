import github from '../../assets/github-mark.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function SkillCard({skill, index}) {
  return (
    <div key={index} className='skill-card'>
      <FontAwesomeIcon icon={skill.logo} className='px-1 pe-2 skill-logo'/>
      <p className='px-1 d-flex align-items-center skill-name'>{skill.name}</p>
    </div>
  );
}