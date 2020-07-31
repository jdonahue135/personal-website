import React from "react";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="work link">Work</div>
      <div className="logo">
        <div className="outer-circle">
          <div className="inner-circle">
            <div className="initials">JD</div>
          </div>
        </div>
      </div>
      <div className="about link">About</div>
    </div>
  );
};

export default Navbar;
