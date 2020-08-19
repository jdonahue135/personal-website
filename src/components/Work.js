import React from "react";

import WorkItem from "./WorkItem";

const Work = (props) => {
  return (
    <div className="work-container">
      <div className="headline work-headline">My Work</div>
      <WorkItem name="Twitter Clone" />
      <WorkItem name="Simpsons Waldo" />
      <WorkItem name="Battleship" />
    </div>
  );
};

export default Work;
