import React, { Component } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import logoma from './logoma.png';

class NavBar extends Component {
  render() {
    return (
      <div className="Nav" style={{ zIndex: 100 }}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link style={{ textDecoration: "none", color: "#D93804" }} to="/">
            <h1 className="TLC">TLC Crushing</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
            // onClick={this.handleToggle}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse ml-0 ml-lg-5"
            id="navbarText"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  <span className="nav-link" href="/#/">
                    Home
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/projects"
                >
                  <span className="nav-link" href="/#/projects">
                    Projects
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/about"
                >
                  <span className="nav-link">About Us</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/contactUs"
                >
                  <span className="nav-link">Contact</span>
                </Link>
              </li>
            </ul>
            <a
              className="m-0"
              style={{ textDecoration: "none", color: "white" }}
              href={this.props.user ? "/auth/logout" : "/auth/callback"}
            >
              {this.props.user ? "Logout" : "Log In"}
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  if (!state) return {};
  return { user: state.user };
}

export default connect(mapStateToProps)(NavBar);
