import React from "react";
import ReactPlayer from "react-player";
import "./Why_Mary_Running.styles.css";
import { WhyMaryRunningData } from  "./Why_Mary_Running.data.js";

export default function WhyMaryRunning({ element }) {
  return (
    <section id="alderman" ref={element}>
        <h2>{ WhyMaryRunningData.title }</h2>
        <p className="long-copy">
          {WhyMaryRunningData.intro}
        </p>
        <div className="video">
          <ReactPlayer
            url={WhyMaryRunningData.video}
            controls
            className="player"
          ></ReactPlayer>
        </div>
    </section>
  );
}
