import React, { Component } from "react";
import "./Footer.css";
import "font-awesome/css/font-awesome.min.css";
// import socialTwitter from "../static/images/social-twitter-white.png";
// import socialInstagram from "../static/images/social-instagram-white.png";
// import socialFacebook from "../static/images/social-facebook-white.png";
// import whiteDemocracyLogo from "../static/images/democracy-logo-white.png";

class Footer extends Component {
  render() {
    return (
      <div className="bg-dark footer">
        <footer className="d-flex flex-row justify-content-between" id="footer">
          <div className="ml-3 align-items-center">
            <h1 style={{ color: "#d93804" }}>TLC Rock Products</h1>
          </div>
          <div className="d-flex align-items-center">
            <div className="mr-4">
              <a href="https://www.facebook.com/tlincorporated">
                <i
                  className="fa fa-facebook-square fa-3x"
                  style={{ color: "gray" }}
                />
              </a>
            </div>
            <div>
              <a
                href="https://plus.google.com/u/0/103973887981928156371"
                className="footer-facebook"
              >
                <i
                  className="fa fa-google-plus-square fa-3x"
                  style={{ color: "gray" }}
                />
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center mr-3">
            <a style={{ color: "gray" }} href={"mailto: alex.ells21@gmail.com"}>
              Contact Us
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
