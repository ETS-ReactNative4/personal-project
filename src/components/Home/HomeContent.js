import React from "react";
import "./Home.css";
import { connect } from "react-redux";
import { getUserInfo } from "../..//ducks/reducer";
import HomeProjects from "./HomeProjects";

function HomeContent() {
  return (
    <div>
      <HomeProjects />
      <div
        className=""
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <div className="card text-center sub-header" style={{ width: "70%" }}>
          <h2 className="card-header" style={{ textDecoration: "underline" }}>
            TLC ROCK
          </h2>
          <div className="card-body">
            {/* <h5 className="card-title">Special title treatment</h5> */}
            <p className="card-text" style={{ color: "black" }}>
              Our employees have extensive and varied experience in a variety of
              construction projects. We have the skills that are needed to
              quickly and effectively address the challenges that arise during
              each project. We value our employees’ contribution to our success
              and we believe that their safety is crucial. We are always seeking
              quality individuals who want to be part of our team.
            </p>
            <a href="/#/contactUs" className="btn btn-outline-secondary btn-lg">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  if (!state) return {};
  return { users: state.users };
}

export default connect(
  mapStateToProps,
  { getUserInfo }
)(HomeContent);
