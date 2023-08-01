import React, { useEffect, useState } from "react";
import "../Styles/Formlist.css"

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
      <div className="listbody">
        <div style={{    width: "-webkit-fill-available"}}>
        <h1 className="glow">Registration Details</h1>

<table className="Skillstable" style={{	background: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
}}>
  <thead>
    <tr>
      <th className="tabledatalist" >First name</th>
      <th className="tabledatalist">MIddle name</th>
      <th className="tabledatalist">Last name</th>
      <th className="tabledatalist">Gender</th>
      <th className="tabledatalist">Date of birth</th>
      <th className="tabledatalist">Contact no</th>
      <th className="tabledatalist">Email</th>
      <th className="tabledatalist">Skills</th>
      <th className="tabledatalist">Description</th>
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

      </div>
      
    </div>
  );
}

export default FormList;
