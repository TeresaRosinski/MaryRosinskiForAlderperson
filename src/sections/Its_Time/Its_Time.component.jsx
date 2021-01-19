import React from "react";
import "./Its_Time.styles.css";
import { ItsTimeData } from "./Its_Time.data.js";

export default function ItsTime() {
  return (
    <section id="ItsTime">
      <div className="ItsTime_Container">
        <h2 className="ItsTime_Title">{ItsTimeData.title}</h2>
        <div className="ItsTime_Bullets">
          {ItsTimeData.changes.map((item, index) => {
            return (
              <div className={item.class}>
                <h3 key={index} className="ItsTime_Number">
                  {item.number}
                </h3>
                <h3 className="ItsTime_Message">{item.message}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
