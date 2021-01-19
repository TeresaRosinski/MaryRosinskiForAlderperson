import React from "react";
import Header from "../sections/Header/Header.component";
import BigQuote from "../sections/Big_Quote_Container/BigQuote.component";
import Why_Mary_Running from "../sections/Why_Mary_Running/Why_Mary_Running.component";
import Its_Time from "../sections/Its_Time/Its_Time.component";
import Who_Is_Mary from "../sections/Who_Is_Mary/Who_Is_Mary.component";
import CommunityGroups from "../sections/CommunityGroups/CommunityGroups.component";
import CalendarSection from "../sections/Calendar/Calendar.component";
import Connect_Form from "../sections/Connect_Form/Connect_Form.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <Router>
        <Header />
        <BigQuote />
        <Why_Mary_Running />
        <Its_Time />
        <Who_Is_Mary />
        <CommunityGroups />
        <Connect_Form />
      </Router>
    </>
  );
}
