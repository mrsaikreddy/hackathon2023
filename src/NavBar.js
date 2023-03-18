import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div class="navbar">
      <div class="container">
        <a href="#" class="navbar-brand">
          Logo
        </a>


        <ul class={`navbar-nav ${menuOpen ? "open" : ""}`}>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              About
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
