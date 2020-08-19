import React from "react";

const Contact = (props) => {
  return (
    <div className="contact-container">
      <div className="contact-headline headline">Let's Talk!</div>
      <div className="contact-text">I'm eager to join your team.</div>
      <a href="mailto:jdonahue135@gmail.com">
        <button className="contact-btn">EMAIL ME</button>
      </a>
    </div>
  );
};

export default Contact;
