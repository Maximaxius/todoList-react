import React, { useState } from "react";
import  "./styles.css";


const InputField = ({ onDel }) => {
  const [delItem, setNewItem] = useState("");

  const handleClick = () => {
    onDel(delItem);
    setNewItem("");
  };

  return (
    <div className="inputContainer">
      <button onClick={handleClick}>del</button>
      <input 
        type="text"
        value={delItem} 
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="..enter name for del" />
    </div>
  );
};

export default InputField;