import React, { Component } from "react";
import "./Home.css";
import { connect } from "react-redux";
import HomeContent from "./HomeContent";

// import axios from 'axios';

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="header">
        <div className="hero-img" />
        <div className="jumbotron jumbotron-fluid text-center">
          <div className="container heroHome">
            <h1 className="display-4">Terry Larsen Crushing</h1>
            <p className="lead" style={{ fontSize: 25, fontWeight: 900 }}>
              The Terry Larsen family of companies are constantly working hard
              to try and improve the work force and provide the best quality
              work. Our work force undergoes weekly training to maintain a safe
              work environment as well as increase productivity and quality of
              product.
            </p>
          </div>
        </div>
        {/* <div className="heroHome">
          <div className="heroHeader text-center">
            <h1>Terry Larsen Crushing</h1>
            <h3 style={{ fontFamily: "Arial", fontWeight: "bold" }}>
              The Terry Larsen family of companies are constantly working hard
              to try and improve
              <br />
              the work force and provide the best quality work. Our work force
              undergoes weekly
              <br />
              training to maintain a safe work environment as well as increase
              productivity and
              <br />
              quality of product.
            </h3>
          </div>
        </div> */}
        <HomeContent />
      </div>
    );
  }
}

function mapStateToProps(state) {
  if (!state) return {};
  return { user: state.user };
}

export default connect(mapStateToProps)(Home);
