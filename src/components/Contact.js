import React from "react";

const Contact = (props) => {
  const handleClick = () => {
    const email = document.querySelector(".email");
    email.select();
    document.execCommand("copy");
    displayMessage();
  };

  const displayMessage = () => {
    const message = document.querySelector("#message-" + props.id);
    message.classList = message.classList + " show";
    setTimeout(hideMessage, 1000);
  };

  const hideMessage = () => {
    const message = document.querySelector("#message-" + props.id);
    message.classList = "contact-message";
  };

  return (
    <div className="contact-container">
      <div className="contact-text">
        Send an email about your project and I will get back to you within 24
        hours.
      </div>
      <div className="btn-container">
        <a href="mailto:jdonahue135@gmail.com">
          <button className="contact-btn">Send Email</button>
        </a>
        <button onClick={handleClick} className="contact-btn">
          Copy Email
        </button>
        <div className="contact-message" id={"message-" + props.id}>
          Email copied to clipboard.
        </div>
      </div>
    </div>
  );
};

export default Contact;
