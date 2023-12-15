import React from "react";
import { Link } from "react-router-dom";
import "./HorizontalMenu.css";

const HorizontalMenu = () => {
  return (
    <nav className="horizontal-menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">add</Link>
        </li>
        <li>
          <Link to="/del">del</Link>
        </li>
        <li>
          <Link to="/completed?completed=true">completed==true</Link>
        </li>
        <li>
          <Link to="/completed?completed=false">completed==false</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HorizontalMenu;
