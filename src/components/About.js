import React from "react";

import Testimonials from "./Testimonials";
import headshot from "../images/headshot.png";

const About = (props) => {
  return (
    <div className="about-container">
      <div className="about-main">
        <div className="headshot-container">
          <img className="headshot" src={headshot} alt="headshot" />
        </div>
        <div className="about-info-container">
          <div className="about-info">
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
            . My commitment to learning and problem solving along with my
            professional track record of high performance makes me a great asset
            to any web development project.
            <br />
            <br />I spend my free time cooking, playing golf, working out and
            traveling. I'm located in Boston, but will be living in different
            remote areas of the country for the rest of 2020.
          </div>
          <div className="location-container">
            <div className="location">Jake is currently in </div>
            <div className="city-container">
              <p className="city">Boston, MA</p>
              <div className="sign-border" />
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default About;
