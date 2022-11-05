import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="headerContainer">
      <div className="header">
        <div className="logodiv">
          <span className="logoText">EXPENSE</span>
          <img
            className="logo"
            src={require("../../assets/pngtree-calculator-icon-design-png-image_1012046.jpg")}
          ></img>
        </div>
        <div className="githubDiv">
          <a
            href="https://github.com/VarunNayak19"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="githubLogo"
              src={require("../../assets/GitHub-Logo-700x394.png")}
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
