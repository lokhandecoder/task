import React, { useEffect, useState } from "react";

function FormList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const list = localStorage.getItem("form");
    if (list) {
      setList(JSON.parse(list));
    }
  }, []);
  return (
    <div>
      <h1>Registration Details</h1>
      <table className="Skillstable">
        <thead>
          <tr>
            <th>fname</th>
            <th>mname</th>
            <th>lname</th>
            <th>gender</th>
            <th>date of birth</th>
            <th>contact no</th>
            <th>email</th>
            <th>Skills</th>
            <th>description</th>
            <th>Slot</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, key) => (
            <tr key={key}>
              <td>{item.fname}</td>
              <td>{item.mname}</td>
              <td>{item.lname}</td>
              <td>{item.gender}</td>
              <td>{item.dob}</td>
              <td>{item.contact}</td>
              <td>{item.email}</td>
              <td>{item.skills}</td>
              <td>{item.desc}</td>
              <td>{item.slot}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FormList;
