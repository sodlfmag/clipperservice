import React from "react";
import "../css/styles.scss";

import ProgressBar from "@ramonak/react-progress-bar";

const ProgressBars = () => {
  <ProgressBar
    completed={80}
    className="wrapper"
    barContainerClassName="container"
    completedClassName="barCompleted"
    labelClassName="label"
  />;
};

export default ProgressBars;
