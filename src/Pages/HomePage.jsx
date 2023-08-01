import React from "react";
import Card from "../Components/Card";
import HomePageData from "../Data/HomePageData";
import "../Styles/HomePage.css"
import { Link } from "react-router-dom";


function HomePage() {
  return (
    <div className="homebg">
      {/* <Card HomePageData={HomePageData}/> */}
      <div className="container">
  <div className="card">
    <Link  to="/skills" >
    <h3 className="title">Skills Details</h3>
    <div className="bar">
      <div className="emptybar" />
      <div className="filledbar" />
    </div>
    <div className="circle">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle className="stroke" cx={60} cy={60} r={50} />
      </svg>
    </div>

    </Link>
    
    
  </div>
  <div className="card">
    <Link to={"/toolkit"}>
    <h3 className="title">Coaching ToolKit</h3>
    <div className="bar">
      <div className="emptybar" />
      <div className="filledbar" />
    </div>
    <div className="circle">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle className="stroke" cx={60} cy={60} r={50} />
      </svg>
    </div>
    </Link>
    
  </div>
  <div className="card">
    <Link to={"/details"}>
    <h3 className="title">Coach Details</h3>
    <div className="bar">
      <div className="emptybar" />
      <div className="filledbar" />
    </div>
    <div className="circle">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle className="stroke" cx={60} cy={60} r={50} />
      </svg>
    </div>
    </Link>
    
  </div>
  <div className="card">
    <Link to={"/form"}>
    <h3 className="title">Coach Request Form</h3>
    <div className="bar">
      <div className="emptybar" />
      <div className="filledbar" />
    </div>
    <div className="circle">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle className="stroke" cx={60} cy={60} r={50} />
      </svg>
    </div>

    </Link>
    
  </div>
</div>


    </div>
  );
}

export default HomePage;
