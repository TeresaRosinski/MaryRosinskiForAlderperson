import React from "react";
import "./Group-Card.styles.css";

export default function GroupCard(props) {
  return (
    <a
      className={props.GroupImage}
      href={props.GroupUrl}
      target="_blank"
      id="GroupCardId"
    >
      <div className="GroupTextContainer">
        <p className="GroupName">{props.GroupName}</p>
        <p className="FoundingMember">{props.GroupStatus}</p>
      </div>
    </a>
  );
}
