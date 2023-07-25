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
      <h1>Coach Details</h1>
      <table className="Skillstable">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>MIddle Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>DAte OF Birth</th>
          </tr>
        </thead>
        <tbody>
          {coach.map((item, key) => (
            <tr key={key}>
              <td>{item.id}</td>
              <td>{item.fname}</td>
              <td>{item.mname}</td>
              <td>{item.lname}</td>
              <td>{item.gender}</td>
              <td>{item.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoachList;
