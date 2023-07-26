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
      console.log(storedData1);
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
  const handleCancel = () => {
    setEditingRow(null);
  };
  return (
    <div className="pagebody">
      <h1>CoachToolKit</h1>
      <div className="boxcontainer">
        <div className="boxcontain">
        <form onSubmit={handleSubmit}>
        <div className="form">
          {/* <label>Name</label> */}
          <input type="input"
          className="form__field"
          placeholder="Name"
          name="name"
          id="name"
           />
          {errorMsg.alertname && (
            <span style={{ color: "red" }}>{errorMsg.alertname}</span>
          )}
        </div>
        <div className="formgap">
          {/* <label>Material Type</label> */}
          <input type="input"
          className="form__field"
          placeholder="Material"
          name="material"
          id="material"
           />
          {errorMsg.alerttype && (
            <span style={{ color: "red" }}>{errorMsg.alerttype}</span>
          )}
        </div>
        <div className="formgap">
          {/* <label>link</label> */}
          <input type="input"
          className="form__field"
          placeholder="Link"
          name="link"
          id="link"
           />
          {errorMsg.alertlink && (
            <span style={{ color: "red" }}>{errorMsg.alertlink}</span>
          )}
        </div>
        <div className="form">
        <button type="submit"class="button-3 " role="button">Save</button>
        </div>
      </form>

        </div>
     
      </div>
      <div>
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
                    class="form__field"
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
                    class="form__field"
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
                    class="form__field"
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
                  <div>
                    <button className="button-3 " onClick={handleSaveClick}>Save</button>
                    <button  className="button-3 delete"onClick={handleCancel}>Cancel</button>
                  </div>
                ) : (
                  <button className="button-3 edit" type="submit" onClick={() => handleUpdate(tool)}>
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

export default CoachToolKit;
