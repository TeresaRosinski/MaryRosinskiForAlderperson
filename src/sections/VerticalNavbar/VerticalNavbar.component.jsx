import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "./VerticalNavbar.styles.css";
import { IconContext } from "react-icons";
import Logo from "./logo3.png";
import { animateScroll as scroll } from "react-scroll";

function VerticalNavbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <IconContext.Provider value={{ color: "var(--primary-color)" }}>
        <div className="navbar">
          <HashLink className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </HashLink>
          <h4 className="nav-title">
            <span className="BigAndBoldNav">Mary Rosinski</span>for 7<sup>th</sup> Ward Alderperson of Evanston
          </h4>
          <a
            href="https://secure.actblue.com/donate/rosinskifor7"
            target="_blank"
            className="navbar_donate_button"
          >
            DONATE
          </a>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <HashLink to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </HashLink>
            </li>
            <div className="logo">
              <img src={Logo} />
            </div>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <HashLink to={item.path}>
                    <span>{item.title}</span>
                    {item.icon}
                  </HashLink>
                </li>
              );
            })}
            <div className="BigDonateButton">
              <a
                href="https://secure.actblue.com/donate/rosinskifor7"
                className="a-BigDonateButton"
                target="_blank"
              >
                DONATE
              </a>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default VerticalNavbar;
