import React from "react";

import WorkItem from "./WorkItem";

const Work = (props) => {
  return (
    <div className="work-container">
      <div className="headline work-headline">My Work</div>
      <WorkItem name="Twitter Clone" />
      <WorkItem name="Todo List" />
      <WorkItem name="Simpsons Waldo" />
      <WorkItem name="Battleship" />
      <WorkItem name="Pomodoro Clock" />
    </div>
  );
};

export default Work;
