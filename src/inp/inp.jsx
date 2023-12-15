import React, { useState } from "react";
import  "./styles.css";

const InputField = ({ onAdd, id }) => {

  const [addName, setNewName] = useState("");
  const [addPersent, setPersent] = useState(false);

  const handleClick = () => {
    onAdd({
      id: id + 1,
      name: addName.length >= 1 ? addName : "-",
      completed: addPersent ? true : false
    })
    setNewName("");
  };

  return (
    <div className="inputContainer">
      <button style={{margin:"0px 15px 0px 0px"}} onClick={handleClick}>add</button>
      <input
        style={{margin:"0px 15px 0px 0px"}}
        type="text"
        value={addName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="..enter task name" />

        <input
        
        type="checkbox" 
        id="bought"
        onChange={(e) => setPersent(addPersent ? false : true)}
        />
        <label for="bought">Выполнено или нет</label>
    </div>
  );
};

export default InputField;