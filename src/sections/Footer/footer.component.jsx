import React from "react";
import "./footer.styles.css";
import logo from "./logo3.png";

function Footer() {
  return (
    <section id="footer">
      <footer className="footer">
        <div className="left-footer">
          <h5>
            BUILT AND DESIGNED BY TERESA ROSINSKI FOR FRIENDS OF MARY ROSINSKI
          </h5>
          <h5>Mary Rosinski for 7th Ward Alderperson</h5>
          <h6>
            © 2020 by Friends of Mary Rosinski. A copy of our report filed with
            the State Board of Elections is (or will be) available on the
            Board’s official website or for purchase from the State Board of
            Elections, Springfield, Illinois.
          </h6>
        </div>
        <div className="right-footer">
          <img
            src={logo}
            alt="Mary Rosinski's 7th Ward Logo"
            className="footer-logo"
          />
        </div>
      </footer>
    </section>
  );
}
export default Footer;
