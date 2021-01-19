import React from "react";
import "./Header.styles.css";
import Logo from "./logo3.png";

const Header = () => {
  return (
    <header>
      <div className="TransclucentBackground">
        <img src={Logo} className="Header-Image"></img>
      </div>
    </header>
  );
};
export default Header;
