import { React, useState } from "react";
import logo from "../assets/logo.svg";
import { OverlayTrigger, Popover } from "react-bootstrap";
const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Content for the popover
  const popoverContent = (
    <Popover id="popover-basic">
      {/* <Popover.Header as="h3">Login As</Popover.Header> */}
      {/* <Popover.Body> */}
      <div className="list-group">
        <a
          href="#"
          className="list-group-item list-group-item-action "
          aria-current="true"
        >
          Admin
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Instructor
        </a>
      </div>
      {/* </Popover.Body> */}
    </Popover>
  );

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="navbar-brand" href="#">
                  <img
                    src={logo}
                    alt="Logo"
                    width={30}
                    height={24}
                    className="d-inline-block"
                  />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              <i className="bi bi-moon-stars-fill" />
              {/* <i className="bi bi-sun-fill " style={{ color: "white" }} /> */}
            </label>
          </div>
          <div
            className="mx-3"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              show={isHovered ? "show" : undefined}
              overlay={popoverContent}
              rootClose
              delay={{ show: 100, hide: 100 }}
            >
              <i
                className="bi bi-person-circle"
                style={{
                  fontSize: "1.5rem",
                  color: "black",
                  cursor: "pointer",
                }}
              ></i>
            </OverlayTrigger>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
