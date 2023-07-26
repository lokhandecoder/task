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
      <div className="pagebody">
      <h1>Registration Details</h1>

      <table className="Skillstable">
        <thead>
          <tr>
            <th className="tabledatalist" >fname</th>
            <th className="tabledatalist">mname</th>
            <th className="tabledatalist">lname</th>
            <th className="tabledatalist">gender</th>
            <th className="tabledatalist">date of birth</th>
            <th className="tabledatalist">contact no</th>
            <th className="tabledatalist">email</th>
            <th className="tabledatalist">Skills</th>
            <th className="tabledatalist">description</th>
            <th className="tabledatalist">Slot</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, key) => (
            <tr key={key}>
              <td className="tabledatalist">{item.fname}</td>
              <td className="tabledatalist">{item.mname}</td>
              <td className="tabledatalist">{item.lname}</td>
              <td className="tabledatalist">{item.gender}</td>
              <td className="tabledatalist">{item.dob}</td>
              <td className="tabledatalist">{item.contact}</td>
              <td className="tabledatalist">{item.email}</td>
              <td className="tabledatalist">{item.skills}</td>
              <td className="tabledatalist">{item.desc}</td>
              <td className="tabledatalist">{item.slot}</td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>
      
    </div>
  );
}

export default FormList;
