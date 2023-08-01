import React from "react";
import "../Styles/SkillsPage.css";
import "../Styles/RoundedSwitch.css";
import "../Styles/InputStyle.css";
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
  const handleCancel = () => {
    setEditingRow(null);
  };

  return (
    <div className="pagebody">
      <div className="getbox">
      {/* <h1>Skills Details</h1> */}
<div className="newbody newsize">
  <div className="wrapper">
  <h2>Skills Details</h2>
  <form onSubmit={handleSave}>
            <div className="input-box" style={{marginRight : '8%'}}>
              <input
                type="input"
                placeholder="Skills"
                name="skills"
                id="name" required
              />
            </div>
            <div className="input-box button">
      <input type="Submit" defaultValue="Save" />
    </div>
          </form>
  </div>
</div>
        {/* <div className="getboxcenter">
          <form onSubmit={handleSave}>
            <div className="form__group field">
              <input
                type="input"
                class="form__field"
                placeholder="Skills"
                name="skills"
                id="name" required
              />
              <button class="button-3 skillbutton" type="submit">
                Save
              </button>
            </div>
          </form>
        </div> */}

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
                    class="form__field"
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
                  <div>
                    <button className="button-3 " onClick={handleSaveClick}>
                      Save
                    </button>
                    <button className="button-3 delete" onClick={handleCancel}>
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    className="button-3 edit"
                    onClick={() => handleEditClick(item)}
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

    </div>
  );
}

export default SkillsDetails;
