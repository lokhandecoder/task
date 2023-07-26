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
    }else if (dob < "2000-01-01" || dob > "2025-01-01") {
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
      <h1>CoachRequestForm</h1>
      <div className="boxcontainer">
        <div className="boxcontain">
        <form onSubmit={handleSubmit}>
        <div className="formgap">
          {/* <label>First Name</label> */}
          <input type="input"
          className="form__field"
          placeholder="First Name"
          name="fname"
          id="fname"
           />  
          {alertMessage && (
            <span style={{ color: "red" }}>{alertMessage.alertfname}</span>
          )}
        </div>
        <div className="formgap">
          {/* <label>Middle Name</label> */}
          <input type="input"
          className="form__field"
          placeholder="Middle Name"
          name="mname"
          id="mname"
           />  
          {alertMessage && (
            <span style={{ color: "red" }}>{alertMessage.alertmname}</span>
          )}
        </div>
        <div className="formgap">
          {/* <label>Last Name</label> */}
          <input type="input"
          className="form__field"
          placeholder="Last Name"
          name="lname"
          id="lname"
           />     
          {alertMessage && (
            <span style={{ color: "red" }}>{alertMessage.alertlname}</span>
          )}
        </div>
        <div className="formgap">
          {/* <label>Gender</label> */}
          <select name="gender" id="gender" className="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="formgap">
          {/* <label>Date of Birth</label> */}
          <input type="date" name="dob" className="date" />
          {alertMessage && (
            <span style={{ color: "red" }}>{alertMessage.alertldob}</span>
          )}
        </div>
        <div className="flex-container">
          <div className="flex-child left">
            <div className="form-data formgap">
              {/* <label>Contact No:</label> */}
              <input type="input"
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
              {/* <label>Email :</label> */}
              <input type="input"
          className="form__field"
          placeholder="Email"
          name="email"
          id="email"
           />     
              {alertMessage && (
                <span style={{ color: "red" }}>{alertMessage.alertemail}</span>
              )}
            </div>
            <div className="form-data">
              {/* <label>Skills:</label> */}
              <input type="input"
          className="form__field"
          placeholder="Skills"
          name="skills"
          id="skills"
           />                   {alertMessage && (
                <span style={{ color: "red" }}>
                  {alertMessage.alertfskills}
                </span>
              )}
            </div>
            <div className="form-data">
              {/* <label>Description:</label> */}
              <textarea name="desc" className="desc formgap" />
              {alertMessage && (
                <span style={{ color: "red" }}>{alertMessage.alertdesc}</span>
              )}
            </div>
            <button className="button-3">Submit</button>
          </div>
          <div className="flex-child right">
            <h4>Date & Time Slot</h4>
            <div>
              {/* <label>Date & Time Slot</label> */}
              <input type="date" className="date" name="slot" />
            </div>
          </div>
        </div>
      </form>

        </div>
      </div>
     
    </div>
  );
}

export default CoachRequestForm;
