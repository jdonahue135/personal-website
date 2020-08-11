import React from "react";
import { projects } from "../constants";
import githubImage from "../images/github.png";

const WorkItem = (props) => {
  const formattedName = props.name.toUpperCase().replace(/ /, "_");
  const project = projects[formattedName];
  return (
    <div className="work-item-container">
      <div className="image-container">
        <a href={project.live} target="_blank" rel="noopener noreferrer">
          <div className="work-item-title" id={project.name}>
            {project.name}
          </div>
          <img src={project.photo} alt="project" />
        </a>
      </div>
      <div className="link-container">
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <img src={githubImage} alt="github" />
          <p className="link-text">View on Github</p>
        </a>
      </div>
    </div>
  );
};

export default WorkItem;
