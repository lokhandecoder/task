import React, { useState, useEffect } from "react";
import "../Styles/CoachToolkit.css";

const toolkit = [
  {
    id: 1,
    name: "Amit LOkhande",
    type: "iron",
    link: "https://www.google.com",
    status: false,
  },
];

function CoachToolKit() {
  const [tool, SetTool] = useState(toolkit);
  const [editingRow, setEditingRow] = useState(null);
  const [errorMsg, setErrorMsg] = useState([
    {
      alertname: "",
      alerttype: "",
      alertlink: "",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const type = e.target.elements.material.value;
    const link = e.target.elements.link.value;

    if (name.length === 0) {
      setErrorMsg({
        alertname: "PLease enter the type",
      });
    } else if (type.length === 0) {
      setErrorMsg({
        alerttype: "PLease enter the type",
      });
    } else if (link.length === 0) {
      setErrorMsg({
        alertlink: "PLease enter the type",
      });
    } else {
      const newTool = {
        id: tool.length + 1,
        name: name,
        type: type,
        link: link,
      };
      SetTool([...tool, newTool]);
      const forLocalStoragetoolkit = [...tool, newTool];

      localStorage.setItem("toolkit", JSON.stringify(forLocalStoragetoolkit));
    }
  };
  useEffect(() => {
    const storedData1 = localStorage.getItem("toolkit");
    if (storedData1) {
      console.log(storedData1)
      SetTool(JSON.parse(storedData1));

    }
  }, []);

  const handleUpdate = (tool) => {
    setEditingRow(tool);
  };

  const handleInputChange = (e, field) => {
    const { value } = e.target;
    setEditingRow((prevRow) => ({ ...prevRow, [field]: value }));
  };
  const handleSaveClick = () => {
    SetTool((prevData) =>
      prevData.map((row) => (row.id === editingRow.id ? editingRow : row))
    );
    setEditingRow(null);
  };

  return (
    <div className="pagebody">
      <h3>CoachToolKit</h3>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <div className="inputfield">
          <label>Name</label>
          <input type="text" name="name" className="name" />
          {errorMsg.alertname && (
            <span style={{ color: "red" }}>{errorMsg.alertname}</span>
          )}
        </div>
        <div className="inputfield">
          <label>Material Type</label>
          <input type="text" name="material" className="material" />
          {errorMsg.alerttype && (
            <span style={{ color: "red" }}>{errorMsg.alerttype}</span>
          )}
        </div>
        <div className="inputfield">
          <label>link</label>
          <input type="text" name="link" className="link" />
          {errorMsg.alertlink && (
            <span style={{ color: "red" }}>{errorMsg.alertlink}</span>
          )}
        </div>
        <div>
          <button type="submit" className="savebuttontoolkit">
            Save
          </button>
        </div>
      </form>
      <hr></hr>
      <table className="Skillstable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Link</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tool.map((tool, key) => (
            <tr key={key}>
              <td>{tool.id}</td>
              <td>
                {editingRow && editingRow.id === tool.id ? (
                  <input
                    type="text"
                    value={editingRow.name}
                    onChange={(e) => handleInputChange(e, "name")}
                  />
                ) : (
                  tool.name
                )}{" "}
              </td>
              <td>
                {editingRow && editingRow.id === tool.id ? (
                  <input
                    type="text"
                    value={editingRow.type}
                    onChange={(e) => handleInputChange(e, "type")}
                  />
                ) : (
                  tool.type
                )}
              </td>
              <td>
                {editingRow && editingRow.id === tool.id ? (
                  <input
                    type="text"
                    value={editingRow.link}
                    onChange={(e) => handleInputChange(e, "link")}
                  />
                ) : (
                  tool.link
                )}
              </td>
              <td>
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </td>
              <td>
                {editingRow && editingRow.id === tool.id ? (
                  <button onClick={handleSaveClick}>Save</button>
                ) : (
                  <button type="submit" onClick={() => handleUpdate(tool)}>
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoachToolKit;
