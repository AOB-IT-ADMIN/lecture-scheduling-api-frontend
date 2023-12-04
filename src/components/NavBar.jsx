// NavBar.js
import React, { useState, useEffect } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { connect } from "react-redux";
import { toggleDarkMode } from "../actions";
import logo from "../assets/logo.svg";
import "./../scss/SwitchMode.css";

// Define popover content outside the component for reusability
const popoverContent = ({ darkMode }) => (
  // console.log(Mode),
  <Popover id="popover-basic">
    <div className="list-group">
      <a
        href="#"
        className={`list-group-item list-group-item-action ${
          darkMode ? "dark" : "light"
        }`}
      >
        Admin
      </a>
      <a
        href="#"
        className={`list-group-item list-group-item-action ${
          darkMode ? "dark" : "light"
        }`}
      >
        Instructor
      </a>
    </div>
  </Popover>
);

// NavBar Component
const NavBar = ({ darkMode, toggleDarkMode }) => {
  // State for tracking hover state
  const [isHovered, setIsHovered] = useState(false);

  // Render the NavBar component
  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? "dark" : "light"}`}>
      <div className="container-fluid">
        {/* Brand/logo */}
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Logo"
            width={30}
            height={24}
            className="d-inline-block"
          />
        </a>
        {/* Toggle button for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Navigation links */}
        <div
          className={`collapse navbar-collapse ${darkMode ? "dark" : "light"}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {/* Navigation items */}
            <NavItem link="#" text="Home" />
            <NavItem link="#" text="Blog" />
            <NavItem link="#" text="About Us" />
            <NavItem link="#" text="Support" />
            <NavItem link="#" text="Contact Us" />
          </ul>
        </div>
        {/* Dark mode switch */}
        <DarkModeSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        {/* User icon with popover */}
        <UserIconPopover
          isHovered={isHovered}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          darkMode={darkMode}
        />
      </div>
    </nav>
  );
};

// Component for individual navigation items
const NavItem = ({ link, text }) => (
  <li className="nav-item">
    <a className="nav-link" href={link}>
      {text}
    </a>
  </li>
);

// Component for dark mode switch
const DarkModeSwitch = ({ darkMode, toggleDarkMode }) => (
  <div className="form-check form-switch">
    <input
      className="form-check-input"
      type="checkbox"
      role="switch"
      id="flexSwitchCheckDefault"
      checked={darkMode}
      onChange={() => {
        toggleDarkMode(!darkMode);
      }}
    />
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
      {/* Dark mode switch icon */}
      <i className={`bi ${darkMode ? "bi-sun-fill" : "bi-moon-stars-fill"}`} />
    </label>
  </div>
);

// Component for user icon with popover
const UserIconPopover = ({
  isHovered,
  onMouseEnter,
  onMouseLeave,
  darkMode,
}) => {
  return (
    <div
      className="mx-3"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        show={isHovered ? "show" : undefined}
        overlay={
          <Popover id="popover-basic">{popoverContent({ darkMode })}</Popover>
        }
        rootClose
        delay={{ show: 100, hide: 100 }}
      >
        <i
          className="bi bi-person-circle"
          style={{ fontSize: "1.5rem", cursor: "pointer" }}
        />
      </OverlayTrigger>
    </div>
  );
};

// Map Redux state to component props
const mapStateToProps = (state) => ({
  darkMode: state.darkMode.darkMode, // Adjust based on your state structure
});

// Map Redux actions to component props
const mapDispatchToProps = {
  toggleDarkMode,
};

// Connect component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
