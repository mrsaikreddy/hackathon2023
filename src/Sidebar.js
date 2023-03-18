import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">MyDocs</div>
      <nav>
        <ul>
          <li>
            <a href="#introduction">introduction</a>
          </li>
          <li>
            <a href="#getting-started">Getting-started</a>
          </li>
          <li>
            <a href="#configuration">Configuration</a>
          </li>
          <li>
            <a href="#customization">Customization</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
