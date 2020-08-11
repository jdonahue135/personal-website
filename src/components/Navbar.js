import React from "react";

const Navbar = (props) => {
  const scrollTo = (e) => {
    if (e.target.id) {
      e.target.id === "about"
        ? window.scrollTo(0, 570)
        : window.scrollTo(0, 2000);
    } else {
      window.scrollTo(0, 0);
    }
  };
  return (
    <div className="navbar">
      <div className="about link" id="about" onClick={scrollTo}>
        About
      </div>
      <div className="logo" onClick={scrollTo}>
        <div className="outer-circle">
          <div className="inner-circle">
            <div className="initials">JD</div>
          </div>
        </div>
      </div>
      <div className="work link" id="work" onClick={scrollTo}>
        Work
      </div>
    </div>
  );
};

export default Navbar;
