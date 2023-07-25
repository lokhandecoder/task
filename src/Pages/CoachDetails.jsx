import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/CoachDetails.css";

const data = [
  {
    id: 1,
    skills: "Writing",
    isEditing: false,
  },
];

function CoachDetails() {
  const navigate = useNavigate();
  const [datasave, setData] = useState([]);
  const [editingRowleft, setEditingRowleft] = useState(null);
  const [editingRowright, setEditingRowright] = useState(null);
  const [detail, setDetail] = useState(data);
  const [date, setDate] = useState([]);
  const [alertMessage, setAlertMessage] = useState([
    {
      alertfname: "",
      alertmname: "",
      alertlname: "",
      alertdob: "",
    },
  ]);

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
      alert("Data Saved SAuccessfully");
      navigate("/coachlist");
    }
  };
  useEffect(() => {
    const storedData1 = localStorage.getItem("details");
    if (storedData1) {
      setData(JSON.parse(storedData1));
    }
  }, []);

  console.log(datasave);

  const handleAdd = (e) => {
    e.preventDefault();
    // alert('Handle Add ');
    const skill = e.target.elements.skillselect.value;
    console.log(skill);

    const newlist = {
      id: detail.length + 1,
      skills: skill,
      isEditing: false,
    };

    setDetail([...detail, newlist]);
  };

  const handledate = (e) => {
    e.preventDefault();

    const fromdate = e.target.elements.fromdate.value;
    const todate = e.target.elements.todate.value;

    // console.log(fromdate,todate);

    if ((fromdate, todate)) {
      const newDate = {
        id: date.length + 1,
        from: fromdate,
        to: todate,
      };

      setDate([...date, newDate]);
    } else {
      alert("Enter the date please");
    }
  };
  const handleEditClickright = (item) => {
    setEditingRowright(item);
  };
  const handleInputChangeleft = (e, field) => {
    const { value } = e.target;
    setEditingRowright((prevRow) => ({ ...prevRow, [field]: value }));
  };
  // console.log(date);
  const handleSaveClickRight = () => {
    setDate((prevData) =>
      prevData.map((row) =>
        row.id === editingRowright.id ? editingRowright : row
      )
    );
    setEditingRowright(null);
  };
  const handleDeleteClick = (id) => {
    setDate((prevData) => prevData.filter((row) => row.id !== id));
  };
  const tableright = date.map((item, key) => (
    <tr key={key}>
      <td>{item.id}</td>
      <td>
        {editingRowright && editingRowright.id === item.id ? (
          <input
            type="date"
            className="fromdate"
            name="fromdate"
            value={item.from}
            onChange={(e) => handleInputChangeleft(e, "from")}
          />
        ) : (
          item.from
        )}
      </td>
      <td>
        {editingRowright && editingRowright.id === item.id ? (
          <input
            type="date"
            className="todate"
            name="todate"
            value={item.to}
            onChange={(e) => handleInputChangeleft(e, "to")}
          />
        ) : (
          item.to
        )}
      </td>
      <td>
        {editingRowright && editingRowright.id === item.id ? (
          <button onClick={handleSaveClickRight}>Save</button>
        ) : (
          <button onClick={() => handleEditClickright(item)}>Edit</button>
        )}
      </td>
      <td>
        <button onClick={() => handleDeleteClick(item.id)}>Delete</button>
      </td>
    </tr>
  ));

  const handleEditClickleft = (item) => {
    setEditingRowleft(item);
  };

  const handleSaveClickleft = () => {
    setDetail((prevData) =>
      prevData.map((row) =>
        row.id === editingRowleft.id ? editingRowleft : row
      )
    );
    setEditingRowleft(null);
  };
  const tableleft = detail.map((item, key) => (
    <tr key={key}>
      <td>{item.id}</td>

      <td>
        {editingRowleft && editingRowleft.id === item.id ? (
          <select
            name="skillselect"
            id="skillselect"
            className="skillselect"
            value={editingRowleft.skills}
            onChange={(e) => handleInputChangeleft(e, "skills")}
          >
            <option value="data1">data1</option>
            <option value="data2">data2</option>
            <option value="data3">data3</option>
            <option value="data4">data4</option>
            <option value="data5">data5</option>
          </select>
        ) : (
          item.skills
        )}{" "}
      </td>
      <td>
        {editingRowleft && editingRowleft.id === item.id ? (
          <button onClick={handleSaveClickleft}>Save</button>
        ) : (
          <button onClick={() => handleEditClickleft(item)}>Edit</button>
        )}
      </td>
    </tr>
  ));

  // skills
  return (
    <div className="pagebody">
      <h3>CoachDetails</h3>
      <hr></hr>
      <form onSubmit={handleSave}>
        <div className="form">
          <label>First Name</label>
          <input type="text" name="fname" className="fname" />
          {alertMessage && (
            <span style={{ color: "red" }}>{alertMessage.alertfname}</span>
          )}
        </div>
        <div className="form">
          <label>Middle Name</label>
          <input type="text" name="mname" className="mname" />
          {alertMessage && (
            <span style={{ color: "red" }}>{alertMessage.alertmname}</span>
          )}
        </div>
        <div className="form">
          <label>Last Name</label>
          <input type="text" name="lname" className="lname" />
          {alertMessage && (
            <span style={{ color: "red" }}>{alertMessage.alertlname}</span>
          )}
        </div>
        <div className="form">
          <label>Gender</label>
          <select name="gender" id="gender" className="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form">
          <label>Date of Birth</label>
          <input type="date" name="dob" className="date" />
          {alertMessage && (
            <span style={{ color: "red" }}>{alertMessage.alertdob}</span>
          )}
        </div>
        <button className="toolkitbutton">Save</button>
      </form>
      <hr></hr>
      <div className="flex-container">
        <div className="flex-child leftcoach ">
          <form onSubmit={handleAdd}>
            <div className="leftform">
              <label>Skills</label>
              <select
                name="skillselect"
                id="skillselect"
                className="skillselect"
              >
                <option value="data1">data1</option>
                <option value="data2">data2</option>
                <option value="data3">data3</option>
                <option value="data4">data4</option>
                <option value="data5">data5</option>
              </select>
              <button type="submit">Add</button>
            </div>
          </form>
          <table className="tableskill">
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Skilss</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{tableleft}</tbody>
          </table>
        </div>
        <div className="flex-child rightcoach">
          <form onSubmit={handledate}>
            <div>
              <div className="leftform">
                <label>From date</label>
                <input type="date" className="fromdate" name="fromdate" />
                <label>To date</label>
                <input type="date" className="todate" name="todate" />
                <button type="submit">Add</button>
              </div>
            </div>
          </form>
          <table className="tableskill">
            <thead>
              <tr>
                <th>Sr No</th>
                <th>From</th>
                <th>To</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{tableright}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CoachDetails;
