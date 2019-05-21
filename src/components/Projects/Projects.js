import React, { Component } from "react";
import "./Projects.css";
import { getProjects } from "../..//ducks/reducer";
import { connect } from "react-redux";
import axios from "axios";
import swal from "sweetalert";
// import ScrollAnimation from 'react-animate-on-scroll';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      editPost: null,
      inputComment: "",
      inputTitle: "",
      addedComment: "",
      addedTitle: "",
      addedImg: "",
      userId: null
    };
    this.onSave = this.onSave.bind(this);
    this.addNew = this.addNew.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount() {
    const { getProjects } = this.props;
    axios.get("/projects/img").then(res => {
      // console.log(res.data)
      getProjects(res.data);
    });

    if (this.props.user) {
      this.setState({
        userId: this.props.user.id
      });
    } else {
      this.setState({
        userId: null
      });
    }
  }

  onSave(id) {
    // console.log('Hello')
    axios
      .put(`/update/project/${id}`, {
        title: this.state.inputTitle,
        comment: this.state.inputComment
      })
      .then(res => {
        this.props.getProjects(res.data);
      });
  }

  addNew() {
    axios
      .post(`/new/project`, {
        title: this.state.addedTitle,
        comment: this.state.addedComment,
        img: this.state.addedImg,
        id: this.state.userId
      })
      .then(res => {
        this.props.getProjects(res.data);
      });
  }

  deletePost(id) {
    axios.delete(`/remove/project/${id}`).then(res => {
      this.props.getProjects(res.data);
    });
  }

  render() {
    return (
      <div className="project-parent">
        <div className="heroProjects">
          <div className="jumbotron jumbotron-fluid text-center">
            <div className="container">
              <h1 className="display-4">Our Mission</h1>
              <p className="lead">
                Our goal is to provide error-free services that are second to
                none in our industry; be competitively priced yet provide a
                profitable return for our company; maintain job security for all
                our employees. Our focus on quality affects all company
                activities.
              </p>
            </div>
          </div>
          <div className="headerProjects mb-5">
            <h2>Here is a list of Projects we are working on</h2>
          </div>
        </div>
        {this.props.user ? (
          <div className="project-input">
            <h3>Add New Project</h3>
            <input
              type="text"
              placeholder="Title"
              value={this.state.addedTitle}
              onChange={a => {
                this.setState({
                  addedTitle: a.target.value
                });
              }}
            />
            <input
              type="text"
              placeholder="Comment"
              value={this.state.addedComment}
              onChange={b => {
                this.setState({
                  addedComment: b.target.value
                });
              }}
            />
            <input
              type="text"
              placeholder="img url"
              value={this.state.addedImg}
              onChange={c => {
                this.setState({
                  addedImg: c.target.value
                });
              }}
            />
            <button
              className="add"
              onClick={() => {
                this.addNew();
                swal("Accepted", "Your project has been posted!", "success");
                this.setState({
                  addedComment: "",
                  addedImg: "",
                  addedTitle: "",
                  userId: this.props.user.id
                });
              }}
            >
              ADD
            </button>
          </div>
        ) : null}

        {this.props.user
          ? //ADMIN BUT NOT EDITING
            this.props.projects.map((item, i) => {
              if (this.state.editPost !== item.id) {
                return (
                  <div key={i}>
                    {/* <h1>YOURE AN ADMIN and not editing</h1> */}
                    <h1 className="project-header">{item.title}</h1>
                    <div className="project">
                      <div>
                        <img className="project1" src={item.img} alt="" />
                      </div>
                      <h3 className="project-info">{item.comment_section}</h3>
                    </div>
                    <button
                      className="editingBtn"
                      onClick={() => {
                        this.setState({
                          editPost: item.id,
                          inputComment: item.comment_section,
                          inputTitle: item.title
                        });
                      }}
                    >
                      EDIT
                    </button>
                    <button
                      className="editingBtn"
                      onClick={() => {
                        this.deletePost(item.id);
                        swal("SUCCESS", "Project deleted", "success");
                      }}
                    >
                      DELETE
                    </button>
                  </div>
                );
              } else {
                //ADMIN EDITING
                return (
                  <div key={i}>
                    {/* <h1>YOURE AN ADMIN and you are editing</h1> */}
                    <input
                      className="inputEdit"
                      type="text"
                      value={this.state.inputTitle}
                      className="project-header"
                      onChange={en => {
                        this.setState({
                          inputTitle: en.target.value
                        });
                      }}
                    />
                    <div className="project">
                      <div>
                        <img className="project1" src={item.img} alt="" />
                      </div>
                      <input
                        className="inputEdit"
                        type="text"
                        value={this.state.inputComment}
                        className="project-info"
                        onChange={e => {
                          this.setState({
                            inputComment: e.target.value
                          });
                        }}
                      />
                    </div>
                    {/* EDIT BUTTON */}
                    <button
                      className="editingBtn"
                      onClick={() => {
                        this.setState({
                          editPost: null
                        });
                      }}
                    >
                      CANCEL
                    </button>
                    {/* SAVE BUTTON */}
                    <button
                      className="editingBtn"
                      onClick={() => {
                        this.onSave(item.id);
                        swal("SUCCESS", "Project Updated", "success");
                        this.setState({
                          editPost: null
                        });
                      }}
                    >
                      SAVE
                    </button>
                  </div>
                );
              }
            })
          : //JUST A USER VIEWING THE PAGE
            this.props.projects.map((item, i) => {
              return (
                <div className="d-flex justify-content-around" key={i}>
                  <div className="card mb-5" style={{ width: "70%" }}>
                    <img className="card-img-top" src={item.img} alt="" />
                    <div className="card-body" style={{}}>
                      <h5 className="card-title" style={{ fontSize: 30 }}>
                        {item.title}
                      </h5>
                      <p className="card-text" style={{ fontSize: 18 }}>
                        {item.comment_section}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  if (!state) return {};
  return { projects: state.projects, user: state.user };
}

export default connect(
  mapStateToProps,
  { getProjects }
)(Projects);
