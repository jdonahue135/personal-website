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
          <img className="work-item-photo" src={project.photo} alt="project" />
        </a>
        <div className="link-container">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <img className="github" src={githubImage} alt="github" />
            <p className="link-text">View on Github</p>
          </a>
        </div>
      </div>
      <div className="work-item-info-container">
        <div className="work-item-title">{project.name}</div>
        <div className="work-item-description">{project.description}</div>
        <div className="work-item-skills">
          <div className="skills-title">Skills Used:</div>
          <ul>
            {project.skills.map((skill) => (
              <li key={"skill-" + project.skills.indexOf(skill)}>{skill}</li>
            ))}
          </ul>
        </div>
        <a href={project.live} target="_blank" rel="noopener noreferrer">
          <button className="contact-btn">VIEW DEMO</button>
        </a>
      </div>
    </div>
  );
};

export default WorkItem;
