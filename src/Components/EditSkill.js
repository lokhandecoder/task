import React from "react";






function EditSkill(item, skills, setSkills) {

    const handleUpdate = (e) => {
        const newlist = skills.map((li,key) => (
            li.id === item.id ? {...li, [e.target.name] : e.target.value } : li
        ) )
        setSkills(newlist);
    }
  return (
    <tr>
      <td>{item.item.id}</td>
      <td>
        <input type="text" name="skills" onChange={handleUpdate} value={item.item.skills} />{" "}
      </td>
      <td>
        <label class="switch">
          <input type="checkbox" onChange={handleUpdate}/>
          <span class="slider round"></span>
        </label>
      </td>
      <td>
        <button type="submit">UPdate</button>
      </td>
    </tr>
  );
}

export default EditSkill;
