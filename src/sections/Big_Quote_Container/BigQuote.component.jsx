import React, { useState } from "react";
import "./BigQuote.styles.css";
import Modal_Form_Holder from "../Modal_Form_Holder/Modal_Form_Holder.component.jsx";

const BigQuote = () => {
  return (
    <section className="BigQuote-container">
      <h1 className="quote-container">
        It’s time to Rebuild Trust in our city government through long term
        planning, fiscal responsibility, accountability and equitable policies.
      </h1>
      <div className="header-button-container">
        <a className="header-button button-1" href="#ItsTime">
          What I Stand For
        </a>
        <a className="header-button button-2" href="#ContactForm">
          Get Involved
        </a>
      </div>
    </section>
  );
};
export default BigQuote;
