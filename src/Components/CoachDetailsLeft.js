import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    skills: "Writing",
    isEditing: false,
  },
];

function CoachDetailsLeft() {
  const [detail, setDetail] = useState(data);
  const [editingRowleft, setEditingRowleft] = useState(null);

  const handleInputChangeleft = (e, field) => {
    const { value } = e.target;
    setEditingRowleft((prevRow) => ({ ...prevRow, [field]: value }));
  };
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
          <button class="button-3" onClick={handleSaveClickleft}>Save</button>
        ) : (
          <button class="button-3 edit" onClick={() => handleEditClickleft(item)}>Edit</button>
        )}
      </td>
    </tr>
  ));
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
    const forLocalStorageform = [...detail, newlist];
    localStorage.setItem("skills", JSON.stringify(forLocalStorageform));
  };
  useEffect(() => {
    const storedData = localStorage.getItem("skills");
    if (storedData) {
      setDetail(JSON.parse(storedData));
    }
  }, []);

  return (
    <div>
      {/* <div className="flex-child leftcoach "> */}
      <form onSubmit={handleAdd}>
        <div className="leftform">
          <label>Skills</label>
          <select name="skillselect" id="skillselect" className="skillselect">
            <option value="data1">data1</option>
            <option value="data2">data2</option>
            <option value="data3">data3</option>
            <option value="data4">data4</option>
            <option value="data5">data5</option>
          </select>
          <button class="button-3 add" type="submit">Add</button>
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
      {/* </div> */}
    </div>
  );
}

export default CoachDetailsLeft;
