import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} my-navbar`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.navbar}
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.home}
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/features">
                  {props.about}
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/pricing">
                  {props.contact}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex form-check form-switch mx-3">
          <input
            className="form-check-input"
            type="checkbox"
            onClick={props.toggleMode}
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label
            className={`form-check-label text-nowrap text-${props.mode === "dark" ? "light" : "dark"} mx-2`}
            htmlFor="flexSwitchCheckDefault"
          >
            Enale Darkmode
          </label>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  navbar: PropTypes.string,
  about: PropTypes.string,
  contact: PropTypes.string,
};
