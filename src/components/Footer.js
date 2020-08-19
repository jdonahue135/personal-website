import React from "react";

const Footer = (props) => {
  return (
    <div className="footer-container">
      <div className="footer-item">
        <div className="footer-title">Location</div>
        <div className="footer-value">Boston, MA</div>
      </div>
      <div className="footer-item">
        <div className="footer-title">Contact</div>
        <div className="footer-value">jdonahue135@gmail.com</div>
      </div>
      <div className="footer-item links">
        <div className="footer-title">Connect</div>
        <a
          className="footer-value follow-link"
          href="https://www.linkedin.com/in/jake-donahue-76a9b442/"
        >
          LinkedIn
        </a>
        <a
          className="footer-value follow-link"
          href="https://github.com/jdonahue135"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Footer;
