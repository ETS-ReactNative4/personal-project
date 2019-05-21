import React, { Component } from "react";
import "./ContactUs.css";
import axios from "axios";
// import fb from './fb.png';
import swal from "sweetalert";
import "font-awesome/css/font-awesome.min.css";

export default class ContactUs extends Component {
  constructor() {
    super();
    this.state = {
      from: "",
      subject: "",
      message: ""
    };
    this.mailerInfo = this.mailerInfo.bind(this);
  }

  mailerInfo(e) {
    e.preventDefault();
    axios
      .post("/contact", {
        to: "alex.ells21@gmail.com",
        from: this.state.from,
        subject: this.state.subject,
        text: this.state.message
      })
      .then(res => {
        swal("Thank You", "Your message has been sent", "success");
        this.setState({
          from: "",
          subject: "",
          message: ""
        });
      });
  }

  render() {
    let { from, subject, message } = this.state;
    // console.log("From: " + from, "Subject: " + subject, "Message: " + message);
    return (
      <div style={{ background: "#e9ecef" }}>
        <div className="contact-hero">
          <div className="jumbotron jumbotron-fluid text-center">
            <div className="jumbotron text-center">
              <h1 className="display-4">
                Reach out with any buisness oppurtunities!
              </h1>
              <p className="lead" style={{ fontSize: 26 }}>
                Fill out the form below or click the link on the bottom of the
                page.
              </p>
            </div>
          </div>
          <div className="flexin pb-5">
            <div className="contact-input p-3" style={{ width: "70%" }}>
              <h1 className="">Contact Us</h1>
              <p>
                Address: 178 S 1800 W St, Lindon, UT 84042
                <br />
                Hours: Mon-Fri 7AM–5PM
                <br />
                Phone: (801) 785-9322
              </p>
              <form style={{ width: "50%" }}>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    value={this.state.from}
                    onChange={e => {
                      this.setState({
                        from: e.target.value
                      });
                    }}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">Subject</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Email Subject"
                    value={this.state.subject}
                    onChange={e => {
                      this.setState({
                        subject: e.target.value
                      });
                    }}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Enter Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Enter message here"
                    value={this.state.message}
                    onChange={e => {
                      this.setState({
                        message: e.target.value
                      });
                    }}
                    required
                  />
                </div>
                <input
                  style={{ width: "100%" }}
                  className="btn btn-lg btn-secondary"
                  type="submit"
                  value="Send your Message"
                  onClick={
                    this.state.from && this.state.subject && this.state.message
                      ? e => this.mailerInfo(e)
                      : false
                  }
                />
              </form>
              {/* <form className="mailerstuff">
                <p>Send Us an Email!</p>
                <input
                  type="text"
                  name="from"
                  placeholder="Enter your email"
                  value={this.state.from}
                  onChange={e => {
                    this.setState({
                      from: e.target.value
                    });
                  }}
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={this.state.subject}
                  onChange={e => {
                    this.setState({
                      subject: e.target.value
                    });
                  }}
                  required
                />
                <input
                  type="text"
                  name="text"
                  placeholder="Input message"
                  value={this.state.message}
                  onChange={e => {
                    this.setState({
                      message: e.target.value
                    });
                  }}
                  className="mytext"
                  required
                />
                <input
                  type="submit"
                  value="Send your Message"
                  onClick={
                    this.state.from && this.state.subject && this.state.message
                      ? e => this.mailerInfo(e)
                      : false
                  }
                />
              </form> */}
              <div className="icons">
                <a href="https://www.facebook.com/tlincorporated">
                  <i className="fa fa-facebook-official fa-2x" />
                </a>
                <a href="https://plus.google.com/u/0/103973887981928156371">
                  <i className="fa fa-google-plus-official fa-2x" />
                </a>
              </div>
            </div>
          </div>
          {/* <div className='fbLink'>{fb.png}</div> */}
        </div>
      </div>
    );
  }
}
