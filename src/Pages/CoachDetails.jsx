import React, { useState, useEffect } from "react";
import "../Styles/CoachDetails.css";
import "../Styles/coachdetailform.css"
import CoachDetailsLeft from "../Components/CoachDetailsLeft";
import CoachDetailsRight from "../Components/CoachDetailsRight";
import CoachDetailsForm from "../Components/CoachDetailsForm";

function CoachDetails() {
  return (
    <div className="pagebody">
      <div className="getbox">
      {/* <h1>CoachDetails</h1> */}
        <div className="boxcontain">
          <CoachDetailsForm />
        </div>
        
       
      <div className="flex-container">
        <div className="flex-child leftcoach ">
          <CoachDetailsLeft />
        </div>
        <div className="flex-child rightcoach">
          <CoachDetailsRight />
        </div>
      </div>
      </div>

    </div>
  );
}

export default CoachDetails;
