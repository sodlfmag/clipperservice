import React from "react";
import "../css/styles.scss";
//https://www.npmjs.com/package/@ramonak/react-progress-bar
import ProgressBar from "@ramonak/react-progress-bar";

const ProgressBars = () => {
  <ProgressBar
    completed={100}
    bgColor="#ffffff"
    height="10px"
    width="60px"
    borderRadius="0px"
    labelAlignment="outside"
    isLabelVisible={false}
    baseBgColor="#000000"
    labelColor="#e80909"
    transitionDuration="0.5s"
  />;
};

export default ProgressBars;
