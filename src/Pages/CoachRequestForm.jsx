import React, { useState, useEffect } from "react";
import "../Styles/CoachRequestForm.css";
import { Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CoachRequestForm() {
  const [form, setForm] = useState([]);
  const [alertMessage, setAlertMessage] = useState([
    {
      alertfname: "",
      alertmname: "",
      alertlname: "",
      alertcontact: "",
      alertemail: "",
      alertskills: "",
      alertdesc: "",
      alertdob: "",
    },
  ]);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const fname = e.target.elements.fname.value;
    const mname = e.target.elements.mname.value;
    const lname = e.target.elements.lname.value;
    const gender = e.target.elements.gender.value;
    const dob = e.target.elements.dob.value;
    const contact = e.target.elements.contact.value;
    const email = e.target.elements.email.value;
    const skills = e.target.elements.skills.value;
    const desc = e.target.elements.desc.value;
    const slot = e.target.elements.slot.value;

    if (fname === "") {
      setAlertMessage({
        alertfname: "Please neter first name",
      });
    } else if (mname === "") {
      setAlertMessage({
        alertmname: "Please neter Middle name",
      });
    } else if (lname === "") {
      setAlertMessage({
        alertlname: "Please neter LAst name",
      });
    } else if (dob < "2000-01-01" || dob > "2025-01-01") {
      setAlertMessage({
        alertdob: "Please enter the Date Correct ",
      });
    } else if (contact === "") {
      setAlertMessage({
        alertcontact: "Please neter contact no",
      });
    } else if (email === "") {
      setAlertMessage({
        alertemail: "Please neter email",
      });
    } else if (skills === "") {
      setAlertMessage({
        alertskills: "Please neter skills",
      });
    } else if (desc === "") {
      setAlertMessage({
        alertdesc: "Please neter desc",
      });
    } else {
      const newList = {
        fname: fname,
        mname: mname,
        lname: lname,
        gender: gender,
        dob: dob,
        contact: contact,
        email: email,
        skills: skills,
        desc: desc,
        slot: slot,
      };
      setForm([...form, newList]);
      const forLocalStorageform = [...form, newList];

      localStorage.setItem("form", JSON.stringify(forLocalStorageform));
      alert("Data Saved Successfully");
      navigate("/formlist");
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("form");
    if (storedData) {
      setForm(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="pagebody">
      <div className="getbox">
      <div className="newbody reqsize">
<div className="wrapper">
  <h2>Coach Request Form</h2>
  <form onSubmit={handleSubmit}>
    <div className="input-box" style={{marginRight : '8%'}}>
    <input
                type="input"
                placeholder="First Name"
                name="fname"
                id="fname"
                required
              />
    </div>  
    <div className="input-box" style={{marginRight : '8%'}}>
    <input
                type="input"
                placeholder="MIddle Name"
                name="mname"
                id="mname"
                required
              />
    </div>
    <div className="input-box" style={{marginRight : '8%'}}>
    <input
                type="input"
                placeholder="Last Name"
                name="lname"
                id="lname"
              />
    </div>
    <div className="input-box" >
          <select name="gender" id="gender">
          <option value="" disabled selected hidden>Select the gender</option>

            <option value="male">Male</option>
           <option value="female">Female</option>
           </select>
    </div>
    <div className="input-box" style={{marginRight : '8%'}}>
    <input type="date" name="dob" />
    </div>
    <div className="input-box" style={{marginRight : '8%'}}>
    <input
                type="input"
                placeholder="Enter your contact number"
                name="contact"
                id="contact"
              />
    </div>
    <div className="input-box" style={{marginRight : '8%'}}>
    <input
                type="input"
                placeholder="Enter your email"
                name="email"
                id="email"
              />
    </div>
    <div className="input-box" style={{marginRight : '8%'}}>
    <input
                type="input"
                placeholder="Enter your skills"
                name="skills"
                id="skills"
              />
    </div>
    <div className="input-box" style={{marginRight : '8%'}}>
    <textarea
                type="input"
                placeholder="Provide the description"
                name="desc"
                id="desc"
              />
    </div>
    <div className="input-box" style={{marginRight : '8%'}}>
    <input type="date" name="slot" className="slot" />
    </div>
    <div className="input-box button">
      <input type="Submit" defaultValue="Save" />
    </div>
  </form>
</div>
</div>
        {/* <h1>CoachRequestForm</h1> */}
          {/* <div className="flex-container">
            <div className="flex-child leftcoach ">
              <img
                className="leftimage"
                src={
                  "https://media.gettyimages.com/id/1422771527/photo/soccer-mother-football-coach-with-her-children-during-a-training-session.jpg?s=612x612&w=gi&k=20&c=-IvYTI4KOCBwJ92rQpwkdxXMeBKvnANuKrtO9QItbJI="
                }
                alt=""
              />
            </div>
            <div className="flex-child rightcoach">
              <form onSubmit={handleSubmit}>
                <div className="formgap">
                  <label>First Name</label>
                  <input
                    type="input"
                    className="form__field"
                    placeholder="First Name"
                    name="fname"
                    id="fname"
                  />
                  {alertMessage && (
                    <span style={{ color: "red" }}>
                      {alertMessage.alertfname}
                    </span>
                  )}
                </div>
                <div className="formgap">
                  <label>Middle Name</label>
                  <input
                    type="input"
                    className="form__field"
                    placeholder="Middle Name"
                    name="mname"
                    id="mname"
                  />
                  {alertMessage && (
                    <span style={{ color: "red" }}>
                      {alertMessage.alertmname}
                    </span>
                  )}
                </div>
                <div className="formgap">
                  <label>Last Name</label>
                  <input
                    type="input"
                    className="form__field"
                    placeholder="Last Name"
                    name="lname"
                    id="lname"
                  />
                  {alertMessage && (
                    <span style={{ color: "red" }}>
                      {alertMessage.alertlname}
                    </span>
                  )}
                </div>
                <div className="formgap">
                  <label>Gender</label>
                  <select name="gender" id="gender" className="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="formgap">
                  <label>Date of Birth</label>
                  <input type="date" name="dob" className="date" />
                  {alertMessage && (
                    <span style={{ color: "red" }}>
                      {alertMessage.alertldob}
                    </span>
                  )}
                </div>
                <div className="flex-container">
                  <div className="flex-child left">
                    <div className="form-data formgap">
                      <label>Contact No:</label>
                      <input
                        type="input"
                        className="form__field"
                        placeholder="Contact Number"
                        name="contact"
                        id="contact"
                      />
                      {alertMessage && (
                        <span style={{ color: "red" }}>
                          {alertMessage.alertcontact}
                        </span>
                      )}
                    </div>
                    <div className="form-data">
                      <label>Email :</label>
                      <input
                        type="input"
                        className="form__field"
                        placeholder="Email"
                        name="email"
                        id="email"
                      />
                      {alertMessage && (
                        <span style={{ color: "red" }}>
                          {alertMessage.alertemail}
                        </span>
                      )}
                    </div>
                    <div className="form-data">
                      <label>Skills:</label>
                      <input
                        type="input"
                        className="form__field"
                        placeholder="Skills"
                        name="skills"
                        id="skills"
                      />{" "}
                      {alertMessage && (
                        <span style={{ color: "red" }}>
                          {alertMessage.alertfskills}
                        </span>
                      )}
                    </div>
                    <div className="form-data">
                      <label>Description:</label>
                      <textarea name="desc" className="desc formgap" />
                      {alertMessage && (
                        <span style={{ color: "red" }}>
                          {alertMessage.alertdesc}
                        </span>
                      )}
                    </div>
                    <div className="form-data requestbutton">
                    <button className="button-3 ">Submit</button>

                    </div>
                  </div>
                  <div className="flex-child right">
                    <div className="dateslot">
                    <h4 className="">Date & Time Slot</h4>
                      <label>Date & Time Slot</label>
                      <input type="date" className="date" name="slot" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
        </div> */}
      </div>
    </div>
  );
}

export default CoachRequestForm;
