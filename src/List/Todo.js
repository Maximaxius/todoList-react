import React from "react";
import "./style.css";

const Todo = ({ product }) => {
  
  return(
    <>
      <div className="item">{product.name} 
      {/* id{product.id} */}
       <p>{product.completed ?  "✓" : "❌" }</p>{" "}
      </div>
    </>
  );
};

export default Todo;
