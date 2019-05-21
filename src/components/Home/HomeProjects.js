import React from "react";
import "./Home.css";
import pro1 from "./imagetwo.jpg";
import pro2 from "./img3.JPG";
import pro3 from "./image.jpg";

export default function HomeProjects() {
  return (
    <div className="HomeImage pt-5 mt-5 pb-5">
      <div
        id="TLCGuarantees"
        className="carousel slide"
        data-ride="carousel"
        style={{ width: "60%" }}
      >
        <ol className="carousel-indicators">
          <li
            data-target="#TLCGuarantees"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#TLCGuarantees" data-slide-to="1" />
          <li data-target="#TLCGuarantees" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="homePageImages d-block w-100"
              src={pro1}
              alt="First slide"
              style={{ opacity: "0.4" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ color: "black", fontSize: 30 }}>
                Quality Employees
              </h5>
              <p style={{ color: "black", fontSize: 20 }}>
                Our employees are drug tested and guaranteed to work hard to
                satisfy your needs.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 homePageImages"
              src={pro2}
              alt="Second slide"
              style={{ opacity: "0.4" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ color: "black", fontSize: 30 }}>
                Quality Equipment
              </h5>
              <p style={{ color: "black", fontSize: 20 }}>
                We use only the best equipment and perform maintenance regularly
                to avoid breakdowns and lost time.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 homePageImages"
              src={pro3}
              alt="Third slide"
              style={{ opacity: "0.4" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ color: "black", fontSize: 30 }}>
                Quality Performance
              </h5>
              <p style={{ color: "black", fontSize: 20 }}>
                We guarantee your satisfaction with whatever task we perform.
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#TLCGuarantees"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#TLCGuarantees"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
