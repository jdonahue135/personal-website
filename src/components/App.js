import React from "react";
import "../styles/App.css";

import Navbar from "./Navbar";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

import mongoDBLogo from "../images/mongoDB.png";
import expressLogo from "../images/express.png";
import reactLogo from "../images/react.png";
import nodeLogo from "../images/node.png";
import awsLogo from "../images/aws.png";

const App = (props) => {
  const topLogos = [reactLogo, nodeLogo, awsLogo];
  const bottomLogos = [mongoDBLogo, expressLogo];
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="headline-container">
          <div className="headline">Hello, my name is Jake Donahue.</div>
          <div className="sub-headline">
            I am a software developer specializing in creating{" "}
            <span className="highlight">dynamic, full-stack</span> web
            applications.
          </div>
        </div>
        <div className="logos-container">
          {topLogos.map((logo) => (
            <img className="tech-logo-sm" key={logo} src={logo} alt="logo" />
          ))}
          <div className="lg-logos-container">
            {bottomLogos.map((logo) => (
              <img className="tech-logo-lg" key={logo} src={logo} alt="logo" />
            ))}
          </div>
        </div>
      </div>
      <Contact id="0" />
      <About />
      <Contact id="1" />
      <Work />
      <Contact id="2" />
    </div>
  );
};

export default App;
