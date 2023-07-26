import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const alert = [
  {
    alertfname: "",
    alertmname: "",
    alertlname: "",
    alertdob: "",
  },
];

function CoachDetailsForm() {
  const navigate = useNavigate();
  const [datasave, setData] = useState([]);
  const [alertMessage, setAlertMessage] = useState(alert);

  const handleSave = (e) => {
    e.preventDefault();
    const fname = e.target.elements.fname.value;
    const mname = e.target.elements.mname.value;
    const lname = e.target.elements.lname.value;
    const gender = e.target.elements.gender.value;
    const dob = e.target.elements.dob.value;
    console.log(dob);

    if (fname.length === 0) {
      setAlertMessage({
        alertfname: "Please entre the first name ",
      });
    } else if (mname.length === 0) {
      setAlertMessage({
        alertmname: "Please enter the middle name",
      });
    } else if (lname.length === 0) {
      setAlertMessage({
        alertlname: "Please enter the Last name",
      });
    } else if (dob < "2000-01-01" || dob > "2025-01-01") {
      setAlertMessage({
        alertdob: "Please enter the Date Correct ",
      });
    } else {
      const newdata = {
        id: datasave.length + 1,
        fname: fname,
        mname: mname,
        lname: lname,
        gender: gender,
        dob: dob,
      };

      setData([...datasave, newdata]);
      const forLocalStoragedeatis = [...datasave, newdata];

      localStorage.setItem("details", JSON.stringify(forLocalStoragedeatis));
      navigate("/coachlist");
    }
  };
  useEffect(() => {
    const storedData1 = localStorage.getItem("details");
    if (storedData1) {
      setData(JSON.parse(storedData1));
    }
  }, []);
  return (
    <div>
      <form onSubmit={handleSave}>
        <div className="form">
          {/* <label>First Name</label> */}
          <input type="input"
          className="form__field"
          placeholder="First Name"
          name="fname"
          id="fname"
           />          {alertMessage && (
            <span style={{ color: "red" }}>{alertMessage.alertfname}</span>
          )}
        </div>
        <div className="form">
          {/* <label>Middle Name</label> */}
          <input type="input"
          className="form__field"
          placeholder="Middle Name"
          name="mname"
          id="mname"
           />            {alertMessage && (
            <span style={{ color: "red" }}>{alertMessage.alertmname}</span>
          )}
        </div>
        <div className="form">
          {/* <label>Last Name</label> */}
          <input type="input"
          className="form__field"
          placeholder="Last Name"
          name="lname"
          id="lname"
           />            {alertMessage && (
            <span style={{ color: "red" }}>{alertMessage.alertlname}</span>
          )}
        </div>
        <div className="form">
          {/* <label>Gender</label> */}
          <select name="gender" id="gender" className="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form">
          {/* <label>Date of Birth</label> */}
          <input type="date" name="dob" className="date" />
          {alertMessage && (
            <span style={{ color: "red" }}>{alertMessage.alertdob}</span>
          )}
        </div>
        <div className="form">
        <button class="button-3" role="button">Save</button>

        </div>
      </form>
    </div>
  );
}

export default CoachDetailsForm;
