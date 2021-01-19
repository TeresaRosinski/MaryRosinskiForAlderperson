import React from "react";
import "./App.css";
import "./queries.css";
import Homepage from "../src/Pages/Homepage";
import Contact from "../src/Pages/Contact";
import Footer from "../src/sections/Footer/footer.component";
import VerticalNavbar from "./sections/VerticalNavbar/VerticalNavbar.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <VerticalNavbar />
        <Switch>
          <Route exact path="/" component={Homepage}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
