import React, { useState } from "react";
import "./Sidebar.css"; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`wrapper ${isOpen ? "open" : ""}`}>
      <input
        type="checkbox"
        id="menuToggler"
        className="input-toggler"
        value="1"
        autoFocus={true}
      />
      <label
        htmlFor="menuToggler"
        id="menuTogglerLabel"
        className="menu-toggler"
        role="button"
        aria-pressed="false"
        aria-expanded="false"
        aria-label="Navigation button"
        onClick={toggleSidebar}
      >
        <span className="menu-toggler__line"></span>
        <span className="menu-toggler__line"></span>
        <span className="menu-toggler__line"></span>
      </label>
      <nav
        id="sidebar"
        className={`sidebar ${isOpen ? "open" : ""}`}
        role="navigation"
        aria-labelledby="menuTogglerLabel"
        aria-hidden={!isOpen}
      >
        <ul
          id="menubar"
          className="menu"
          role="menubar"
          aria-orientation="vertical"
        >
          <li className="menu__item" role="none">
            <a className="menu__link" href="#" role="menuitem" tabIndex="-1">
              Home
            </a>
          </li>
          <li className="menu__item" role="none">
            <a className="menu__link" href="#" role="menuitem" tabIndex="-1">
              Blog
            </a>
          </li>
          <li className="menu__item" role="none">
            <a className="menu__link" href="#" role="menuitem" tabIndex="-1">
              Portfolio
            </a>
          </li>
          <li className="menu__item" role="none">
            <a className="menu__link" href="#" role="menuitem" tabIndex="-1">
              About
            </a>
          </li>
          <li className="menu__item" role="none">
            <a className="menu__link" href="#" role="menuitem" tabIndex="-1">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

