import React from "react";
import "../styles/App.css";

import Navbar from "./Navbar";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

import mongoDBLogo from "../images/mongoDB.png";
import expressLogo from "../images/express.png";
import reactLogo from "../images/react.png";
import nodeLogo from "../images/node.png";
import awsLogo from "../images/aws.png";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.aboutRef = React.createRef();
    this.workRef = React.createRef();
    this.contactRef = React.createRef();
  }

  scrollToComponent(e) {
    if (e.target.id === "about") {
      this.aboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (e.target.id === "experience") {
      this.workRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      this.contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }

  render() {
    const topLogos = [reactLogo, nodeLogo, awsLogo];
    const bottomLogos = [mongoDBLogo, expressLogo];

    return (
      <div className="App">
        <Navbar onClick={this.scrollToComponent.bind(this)} />
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
                <img
                  className="tech-logo-lg"
                  key={logo}
                  src={logo}
                  alt="logo"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="scroll-component" ref={this.aboutRef}>
          <About />
        </div>
        <Contact />
        <div className="scroll-component" ref={this.workRef}>
          <Work />
        </div>
        <Testimonials />
        <Footer />
        <div ref={this.contactRef} />
      </div>
    );
  }
}

export default App;
