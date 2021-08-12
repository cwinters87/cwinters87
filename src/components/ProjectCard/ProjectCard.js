import './style.css'

// Props are passed through our functional component.
function ProjectCard(props) {
  return (

    <a className="portfolio-div-link" href={props.url} rel="noreferrer" target="_blank">
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <a href={props.url} rel="noreferrer" target="_blank">{props.name}</a><span><a href={props.github} rel="noreferrer" target="_blank"><i className="fa fa-github"></i></a></span>
            </li>          
            <li>
              {props.tech}
            </li>
          </ul>
        </div>
      </div>
    </a>
    
  );
}

export default ProjectCard;