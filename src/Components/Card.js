import React from "react";
import "../Styles/Card.css";
import { Link } from "react-router-dom";
import img1 from '../Images/img1.png';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.png';
import img4 from '../Images/img4.jfif';   


const image = [
  {
    img1 : "../public/img1.png"
  }
]

function Card() {

  return (
    <div class="row">
      <div class="column">
        <div className="card">
          <Link
            to="/skills"
            style={{ textDecoration: "none", color: "black" }}
            className="card1"
          >
            <img
              className="img1"
              src= {img1}
              alt="Denim Jeans"
              style={{ width: "100%" }}
            />
            <div className="tabname">
                  <h2>Skills Details</h2>
            </div>
          </Link>
        </div>
      </div>
      <div class="column">
        <div className="card">
          <Link
            to={"/toolkit"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              className="img2"
              src={img2}
              alt="Denim Jeans"
              style={{ width: "65%" }}
            />
            <div className="tabname">
            <h2>Coaching ToolKit</h2>
            </div>
          </Link>
        </div>
      </div>
      <div class="column">
        <div className="card">
          <Link
            to={"/details"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              className="img3"
              src={img3}
              alt="Denim Jeans"
              style={{ width: "55%" }}
            />
            <div className="tabname">
            <h2>Coach Details</h2>
            </div>
          </Link>
        </div>
      </div>
      <div class="column">
        <div className="card">
          <Link to={"/form"} style={{ textDecoration: "none", color: "black" }}>
            <img
              className="img4"
              src={img4}
              alt="Denim Jeans"
              style={{ width: "100%" }}
            />
            <div className="tabname">
            <h2>Coach Request Form</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
