import React, { useState, useEffect } from "react";

function CoachDetailsRight() {
  const [date, setDate] = useState([]);
  const [editingRowright, setEditingRowright] = useState(null);

  const handledate = (e) => {
    e.preventDefault();

    const fromdate = e.target.elements.fromdate.value;
    const todate = e.target.elements.todate.value;

    if ((fromdate, todate)) {
      const newDate = {
        id: date.length + 1,
        from: fromdate,
        to: todate,
      };

      setDate([...date, newDate]);
      const forLocalStorageform = [...date, newDate];
      localStorage.setItem("skillsDate", JSON.stringify(forLocalStorageform));
    } else {
      alert("Enter the date please");
    }
  };
  useEffect(() => {
    const storedData = localStorage.getItem("skillsDate");
    if (storedData) {
      setDate(JSON.parse(storedData));
    }
  }, []);

  const handleEditClickright = (item) => {
    setEditingRowright(item);
  };

  const handleInputChangeright = (e, field) => {
    const { value } = e.target;
    setEditingRowright((prevRow) => ({ ...prevRow, [field]: value }));
  };
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
            className="date"
            name="fromdate"
            value={item.from}
            onChange={(e) => handleInputChangeright(e, "from")}
          />
        ) : (
          item.from
        )}
      </td>
      <td>
        {editingRowright && editingRowright.id === item.id ? (
          <input
            type="date"
            className="date"
            name="todate"
            value={item.to}
            onChange={(e) => handleInputChangeright(e, "to")}
          />
        ) : (
          item.to
        )}
      </td>
      <td>
        {editingRowright && editingRowright.id === item.id ? (
          <button class="button-3 "onClick={handleSaveClickRight}>Save</button>
        ) : (
          <button class="button-3 edit" onClick={() => handleEditClickright(item)}>Edit</button>
        )}
      </td>
      <td>
        <button  class="button-3 delete" onClick={() => handleDeleteClick(item.id)}>Delete</button>
      </td>
    </tr>
  ));
  return (
    <div>
      <form onSubmit={handledate}>
        <div>
          <div className="leftform">
            <label>From date</label>
            <input type="date" className="date" name="fromdate" />
            <label>To date</label>
            <input type="date" className="date" name="todate" />
            <button class="button-3 add"  type="submit">Add</button>
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
  );
}

export default CoachDetailsRight;
