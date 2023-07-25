import React from "react";
import "../Styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";


function Navbar() {
    const location = useLocation();
  return (
    <div>
      <div className="topnav" id="myTopnav">
        <Link to="/home" className={"/home" === location.pathname ? 'active' : ''}>Home</Link>
        <Link to="/skills" className={"/skills" === location.pathname ? 'active' : ''}>Skills Details</Link>
        <Link to="/toolkit" className={"/toolkit" === location.pathname ? 'active' : ''}>Coaching ToolKit</Link>
        <Link to="/details" className={"/details" === location.pathname ? 'active' : ''}>Coach Details</Link>
        <Link to="/form" className={"/form" === location.pathname ? 'active' : ''}>Coach Request Form</Link>
        <div className="dropdown">
          <button className="dropbtn">
            Lists
          </button>
          <div className="dropdown-content">
            <Link to="/formlist" className="reg">Registration Details</Link>
            <Link to="/coachlist" className="win">Coach List</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
