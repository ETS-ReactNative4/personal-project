import React, { Component } from "react";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div style={{ background: "#e9ecef" }}>
        <div className="about-hero">
          {/* <iframe
            title="vid"
            src="https://www.youtube.com/embed/0LZsUDYHuec?rel=0&showinfo=0&autoplay=1&loop=1&controls=0&autohide=1"
            frameBorder="0"
            allowFullScreen
          /> */}
          <div className="jumbotron text-center">
            <h1 className="display-4">TLC ROCK</h1>
            <p className="lead" style={{ fontSize: 26 }}>
              A custom crushing operation capable of crushing up to 750 tons per
              hour. We have been in business for 15 years. TLC is managed by
              Kevin Larsen who oversees the operation and maintains quality
              control. We are a completely mobile operation able to mobilize to
              our customer’s site and process there materials on site. We
              specialize in construction aggregates such as road base, drain
              rock, crushed rock and fill materials, as well as washed rock
              products. We have the abilities to RECYCLE concrete and asphalt
              turning them in to valuable materials that save resources and
              space in our landfills. Our Equipment is well maintained and up to
              date to keep down time to a minimum so we can be as efficient as
              possible while working on you project.
            </p>
            <hr className="my-4" />
            <p style={{ fontSize: 22 }}>
              Please take a look at our sites and projects we are currently
              working on!
            </p>
            <p className="lead">
              <a
                className="btn btn-outline-secondary btn-lg"
                href="/#/projects"
                role="button"
              >
                Projects
              </a>
            </p>
          </div>
          {/* <div class="jumbotron jumbotron-fluid text-center">
            <div class="container">
              <h1 class="display-4">TLC ROCK</h1>
              <p class="lead">
                A custom crushing operation capable of crushing up to 750 tons
                per hour. We have been in business for 15 years. TLC is managed
                by Kevin Larsen who oversees the operation and maintains quality
                control. We are a completely mobile operation able to mobilize
                to our customer’s site and process there materials on site. We
                specialize in construction aggregates such as road base, drain
                rock, crushed rock and fill materials, as well as washed rock
                products. We have the abilities to RECYCLE concrete and asphalt
                turning them in to valuable materials that save resources and
                space in our landfills. Our Equipment is well maintained and up
                to date to keep down time to a minimum so we can be as efficient
                as possible while working on you project.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
