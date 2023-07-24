import React from "react";
import "../Styles/SkillsPage.css";
import "../Styles/RoundedSwitch.css";
import { useState, useEffect } from "react";

const skillslist = [
  {
    id: 1,
    skills: "Writing",
    status: false,
    isEditing: false,
  },
];

function SkillsDetails() {
  const [skills, setSkills] = useState(skillslist);
  const [editingRow, setEditingRow] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");

  const handleSave = (e) => {
    e.preventDefault();

    const skill = e.target.elements.skills.value;

    if (skill) {
      const newList = {
        id: skills.length + 1,
        skills: skill,
        status: true,
        isEditing: false,
      };

      setSkills([...skills, newList]);
      const forLocalStorageskills = [...skills, newList];
      setAlertMessage("");
      localStorage.setItem("skillsdata", JSON.stringify(forLocalStorageskills));
    } else {
      setAlertMessage("Please enter a value.");
    }
  };
  useEffect(() => {
    const storedData = localStorage.getItem("skillsdata");
    if (storedData) {
      setSkills(JSON.parse(storedData));
    }
  }, []);

  const handleEditClick = (item) => {
    setEditingRow(item);
  };

  const handleInputChange = (e, field) => {
    const { value } = e.target;
    setEditingRow((prevRow) => ({ ...prevRow, [field]: value }));
  };
  const handleSaveClick = () => {
    setSkills((prevData) =>
      prevData.map((row) => (row.id === editingRow.id ? editingRow : row))
    );
    setEditingRow(null);
  };

  return (
    <div className="pagebody">
      <h3>Skills Details</h3>
      <hr></hr>
      <div className="skills">
        <form onSubmit={handleSave}>
          <label>Skills : </label>
          <input type="text" placeholder="Enter your skills" name="skills" />
          {alertMessage && <span style={{ color: "red" }}>{alertMessage}</span>}
          <button type="submit" className="savebutton">
            SAVE
          </button>
        </form>
      </div>
      <hr></hr>

      <table className="Skillstable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Skills</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((item, key) => (
            <tr key={key}>
              <td>{item.id}</td>
              <td>
                {editingRow && editingRow.id === item.id ? (
                  <input
                    type="text"
                    value={editingRow.skills}
                    onChange={(e) => handleInputChange(e, "skills")}
                  />
                ) : (
                  item.skills
                )}
              </td>
              <td>
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </td>
              <td>
                {editingRow && editingRow.id === item.id ? (
                  <button onClick={handleSaveClick}>Save</button>
                ) : (
                  <button onClick={() => handleEditClick(item)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SkillsDetails;
