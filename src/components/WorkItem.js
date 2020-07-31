import React from "react";
import { constants } from "../constants";
import githubImage from "../images/github.png";

const WorkItem = (props) => {
  const formattedName = props.name.toUpperCase().replace(/ /, "_");
  const project = constants[formattedName];
  return (
    <div className="work-item-container">
      <div className="image-container">
        <a href={project.live} target="_blank" rel="noopener noreferrer">
          <img src={project.photo} alt="project" />
        </a>
      </div>
      <div className="work-item-about-container">
        <a href={project.live} target="_blank" rel="noopener noreferrer">
          <div className="work-item-title">{props.name}</div>
        </a>
        <div className="work-item-description">{project.description}</div>
        <div className="link-container">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <img src={githubImage} alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
