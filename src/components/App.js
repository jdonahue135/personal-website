import React from "react";
import "../styles/App.css";

import Navbar from "./Navbar";
import WorkItem from "./WorkItem";

const App = (props) => {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="headline-container">
          <div className="headline">I'm Jake</div>
          <div className="sub-headline">A web developer from Boston.</div>
        </div>
        <div className="arrow" />
      </div>
      <div className="work-container">
        <WorkItem name="Twitter Clone" />
        <WorkItem name="Simpsons Waldo" />
        <WorkItem name="Battleship" />
      </div>
    </div>
  );
};

export default App;
