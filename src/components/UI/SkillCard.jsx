import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '@iconify/react';
import { faGithub, faLinkedin, faJs, faReact, faNodeJs, } from "@fortawesome/free-brands-svg-icons"
import { faDatabase, faCloud } from "@fortawesome/free-solid-svg-icons"

const logoComponents = {
  mongoDB: <Icon icon='simple-icons:mongodb' width="30" height="30"/>,
  express: <Icon icon='skill-icons:expressjs-light' width="30" height="30" className='me-1' />,
  graphQL: <Icon icon='simple-icons:graphql' width="30" height="30" className='me-1' />,
  github: <FontAwesomeIcon icon={faGithub} className='px-1 pe-2 skill-logo' />,
  linkedin: <FontAwesomeIcon icon={faLinkedin} className='px-1 pe-2 skill-logo' />,
  js: <FontAwesomeIcon icon={faJs} className='px-1 pe-2 skill-logo' />,
  react: <FontAwesomeIcon icon={faReact} className='px-1 pe-2 skill-logo' />,
  sql: <FontAwesomeIcon icon={faDatabase} className='px-1 pe-2 skill-logo' />,
  nodeJS: <FontAwesomeIcon icon={faNodeJs} className='px-1 pe-2 skill-logo' />,
  rest: <FontAwesomeIcon icon={faCloud} className='px-1 pe-2 skill-logo' />,
};

export default function SkillCard({ skill, index }) {
  const logoComponent = logoComponents[skill.logo];

  return (
    <div key={index} className='skill-card'>
      {logoComponent && logoComponent}
      <p className='px-1 d-flex align-items-center skill-name'>{skill.name}</p>
    </div>
  );
}