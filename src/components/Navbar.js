import React from "react";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="link" id="about" onClick={props.onClick}>
        ABOUT
      </div>
      <div className="link" id="experience" onClick={props.onClick}>
        EXPERIENCE
      </div>
      <div className="link" id="contact" onClick={props.onClick}>
        CONTACT
      </div>
    </div>
  );
};

export default Navbar;
