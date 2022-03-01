import React from "react";
import ViewSection from "./component/bugViewSection";
import BugModel from "../../../Modules/bugModel";
import "./bugView.css";

export default (props) => {
  const bug = new BugModel(props.bug);

  return (
    <div className="bug-view">
      <button onclick={props.clicked} className="close-btn">
        Close
      </button>
      <h2>{bug.name}</h2>
      <ViewSection title="Details" info={bug.details} />
      <ViewSection title="Steps" info={bug.steps} />
      <ViewSection title="Priority" info={bug.priority} />
      <ViewSection title="Creator" info={bug.creator} />
      <ViewSection title="App Version" info={bug.version} />
      <ViewSection title="Time Created" info={bug.time} />
    </div>
  );
};
