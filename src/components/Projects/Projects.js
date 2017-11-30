import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import './Projects.css';
import { getProjects } from '../..//ducks/reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';
// import ScrollAnimation from 'react-animate-on-scroll';



class Projects extends Component {
    constructor(){
        super()
        this.state ={
            editPost: null,
            inputComment: '',
            inputTitle: '',
            addedComment:'',
            addedTitle:'',
            addedImg:'',
            userId: null
        }
        this.onSave = this.onSave.bind(this);
        this.addNew = this.addNew.bind(this);
        this.deletePost = this.deletePost.bind(this);
    }

    componentDidMount(){
        const{getProjects} = this.props;
        axios.get('/projects/img').then( res => {
            // console.log(res.data)
            getProjects(res.data)
        })

        if(this.props.user){
            this.setState({
                userId: this.props.user.id
            })
        } else {
            this.setState({
                userId: null
            })
        }
    }

    onSave(id){
        // console.log('Hello')
        axios.put(`/update/project/${id}`, {
            title: this.state.inputTitle,
            comment: this.state.inputComment
        })
        .then(res => { this.props.getProjects(res.data)})
    }

    addNew(){
        axios.post(`/new/project`, {
            title: this.state.addedTitle,
            comment: this.state.addedComment,
            img: this.state.addedImg,
            id: this.state.userId
        })
        .then(res => {this.props.getProjects(res.data)})
    }

    deletePost(id){
        axios.delete(`/remove/project/${id}`).then( (res) => { this.props.getProjects(res.data)})
    }

    

    render() {
        // console.log(this.props.users[0].id)
        // console.log(this.state.inputComment, this.state.inputTitle)
        // console.log('Comment: ' + this.state.addedComment, 'img: ' + this.state.addedImg,'Title: ' + this.state.addedTitle, 'User: ' + this.state.userId)
        // console.log(this.props.users)
        // console.log(this.props.user.id)
        // console.log(this.state.userId)
        return (
            <div className='project-parent'>
                <div className='heroProjects'>
                    <NavBar />
                    <div className='Mission'>
                        <h1>Our Mission</h1>
                        <h3>Our goal is to provide error-free services that are second to none in our industry;<br />
                         be competitively priced yet provide a profitable return for our company;<br /> maintain job security
                          for all our employees. Our focus on quality affects all company activities.</h3>
                    </div>
                    <div className='headerProjects'>
                        <h2>Current projects we're working on</h2>
                    </div>
                </div>
                { this.props.user ?
                <div className='project-input'>
                    <h3>Add New Project</h3>
                        <input type="text" placeholder='Title' value={this.state.addedTitle} onChange={ (a) =>{
                            this.setState({
                                addedTitle: a.target.value
                            })  }} />
                         <input type="text" placeholder='Comment' value={this.state.addedComment} onChange={ (b) => {
                            this.setState({
                                addedComment: b.target.value
                            })    }} />
                        <input type="text" placeholder='img url' value={this.state.addedImg} onChange={ (c) => {
                            this.setState({
                                addedImg: c.target.value
                            })    }} />
                        <button className="add" onClick={() => {this.addNew()
                            swal('Accepted', 'Your project has been posted!', 'success')
                            this.setState({
                                addedComment: '',
                                addedImg: '',
                                addedTitle: '',
                                userId: this.props.user.id
                            })}}>ADD</button>
                </div>
                : null}
                
                
                {this.props.user ? 
                //ADMIN BUT NOT EDITING 
                 this.props.projects.map((item, i) => {
                        if (this.state.editPost !== item.id) { return <div key={i}>
                            {/* <h1>YOURE AN ADMIN and not editing</h1> */}
                            <h1 className='project-header'>{item.title}</h1>
                                <div className='project'>
                                    <div>
                                        <img className='project1' src={item.img} alt="" />
                                    </div>
                                    <h3 className='project-info'>{item.comment_section}</h3>
                                </div>
                                <button className='editingBtn' onClick={ () => {
                                    this.setState({
                                        editPost: item.id,
                                        inputComment: item.comment_section,
                                        inputTitle: item.title})}}>EDIT</button>
                                <button className='editingBtn' onClick={ ()=> {this.deletePost(item.id)
                                    swal('SUCCESS', 'Project deleted', 'success')}}>DELETE</button>
                        </div>}
                         else { 
                             //ADMIN EDITING
                            return <div key={i}>
                            {/* <h1>YOURE AN ADMIN and you are editing</h1> */}
                            <input className='inputEdit' type='text' value={this.state.inputTitle} className='project-header' onChange={ (en) => {
                                this.setState({
                                    inputTitle: en.target.value
                                })
                            }}></input>
                                <div className='project'>
                                    <div>
                                        <img className='project1' src={item.img} alt="" />
                                    </div>
                                    <input className='inputEdit' type='text' value={this.state.inputComment} className='project-info' onChange={ (e) => {
                                        this.setState({
                                            inputComment: e.target.value
                                        })
                                    }}></input>
                                </div>
                                    {/* EDIT BUTTON */}
                                <button className='editingBtn' onClick={ () => {
                                    this.setState({
                                        editPost: null
                                    })}}>CANCEL
                                </button>
                                {/* SAVE BUTTON */}
                                <button className='editingBtn' onClick={() => {this.onSave(item.id)
                                    swal('SUCCESS', 'Project Updated', 'success')
                                    this.setState({
                                        editPost: null
                                    })}}>SAVE</button>
                        </div>  }})
                    : 
                    //JUST A USER VIEWING THE PAGE
                    this.props.projects.map((item, i) => {
                        return <div key={i}>
                        {/* <ScrollAnimation animateIn="fadeIn" animateOnce='true'> */}
                            <h1 className='project-header'>{item.title}</h1>
                                <div className='project'>
                                    <img className='project1' src={item.img} alt="" />
                                    <h3 className='project-info'>{item.comment_section}</h3>
                                </div>
                        {/* </ScrollAnimation> */}
                        </div>
                })  }
            </div>
        )
    }
}


function mapStateToProps(state) {
    if (!state) return {};
    return {projects: state.projects,
            user: state.user};
  }


  export default connect(mapStateToProps, {getProjects})(Projects)