import React, { useState, useEffect } from "react";

function CoachList() {
  const [coach, setCoach] = useState([]);

  useEffect(() => {
    const list = localStorage.getItem("details");
    if (list) {
      setCoach(JSON.parse(list));
    }
  }, []);

  return (
    <div>
      <div className="pagebody">
      <h1>Coach Details</h1>

      <table className="Skillstable">
        <thead>
          <tr>
            <th className="tabledatalist">ID</th>
            <th className="tabledatalist">First Name</th>
            <th className="tabledatalist">MIddle Name</th>
            <th className="tabledatalist">Last Name</th>
            <th className="tabledatalist">Gender</th>
            <th className="tabledatalist">DAte OF Birth</th>
          </tr>
        </thead>
        <tbody>
          {coach.map((item, key) => (
            <tr key={key}>
              <td className="tabledatalist">{item.id}</td>
              <td className="tabledatalist">{item.fname}</td>
              <td className="tabledatalist">{item.mname}</td>
              <td className="tabledatalist">{item.lname}</td>
              <td className="tabledatalist">{item.gender}</td>
              <td className="tabledatalist">{item.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>
      
    </div>
  );
}

export default CoachList;
