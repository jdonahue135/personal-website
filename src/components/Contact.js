import React from "react";

const Contact = (props) => {
  return (
    <div className="contact-container">
      <div className="contact-text">
        Send an email about your project and I will get back to you within 24
        hours.
      </div>
      <a href="mailto:jdonahue135@gmail.com">
        <button className="contact-btn">Email me</button>
      </a>
    </div>
  );
};

export default Contact;
