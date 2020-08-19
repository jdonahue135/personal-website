import React from "react";

import headshot from "../images/headshot.png";

const About = (props) => {
  return (
    <div className="about-container">
      <div className="about-content-container">
        <div className="about-content">
          After 4 years in a Sales Management position at a startup, I decided
          to teach myself computer programming. I started on nights and
          weekends, eventually making it my full-time job with the help of{" "}
          <a
            className="odin-project"
            href="https://www.theodinproject.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Odin Project
          </a>
        </div>
      </div>
      <div className="headshot-container">
        <img className="headshot" src={headshot} alt="headshot" />
      </div>
    </div>
  );
};

export default About;
