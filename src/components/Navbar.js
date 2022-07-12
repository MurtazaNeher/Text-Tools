import React from "react";
import PropTypes from "prop-types";
import "../App.css";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg sticky-top bg-${props.mode} navbar-${props.mode} `}
      >
        <div className={`container-fluid `}>
          <a className={`navbar-brand `} href="/">
            {props.title}
          </a>
          <button
            className={`navbar-toggler navbar-${
              props.mode === "light" ? "light" : "dark"
            }`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link active `} aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link `}
                  href={props.aboutLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {props.aboutTitle}
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link `} href="/">
                  Contact Us
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

            <div>
              <input
                type="checkbox"
                className="checkbox"
                id="checkbox"
                onClick={props.toggleMode}
              />
              <label htmlFor="checkbox" className="label" >
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <div className="ball"></div>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutTitle: PropTypes.string.isRequired,
  aboutLink: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutTitle: "About Us",
  aboutLink: "https://murtazaneherwala.netlify.app/",
};
