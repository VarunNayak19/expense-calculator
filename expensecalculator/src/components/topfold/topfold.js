import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./topfold.css";
const TopFold = () => {
  const [query, setquery] = useState("");
  const handleQuery = (e) => {
    setquery(e.target.value);
  };
  return (
    <div className="topfoldContainer">
      {window.location.pathname === "/" ? (
        <div className="homeTopFold">
          <div className="searchBarDiv">
            <input
              className="searchBarInput"
              placeholder="Search Here..."
              value={query}
              onChange={(e) => handleQuery(e)}
            />
          </div>
          <Link to="/add" className="nullifyTextDecoration">
            <div className="addButtonDiv buttonStyle">
              ADD <i className="fa-solid fa-circle-plus"></i>
            </div>
          </Link>
        </div>
      ) : (
        <div className="addTopfold">
          <Link to="/" className="nullifyTextDecoration">
            <div className="back buttonStyle">GO BACK</div>
          </Link>
          <div className="cancel buttonStyle">CANCEL</div>
        </div>
      )}
    </div>
  );
};

export default TopFold;
