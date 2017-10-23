import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import './Projects.css';
import { getProjects } from '../..//ducks/reducer';
import { connect } from 'react-redux';
import axios from 'axios';


class Projects extends Component {
    constructor(){
        super()
        this.state ={
            editPost: null,
            inputComment: '',
            inputTitle: ''
        }
    }

    componentDidMount(){
        const{getProjects} = this.props;
        axios.get('http://localhost:3013/projects/img').then( res => {
            // console.log(res.data)
            getProjects(res.data)
        })
    }

    

    render() {
        console.log(this.props.users)
        console.log(this.state.inputComment, this.state.inputTitle)
        return (
            <div>
                <div className='heroProjects'>
                    <NavBar />
                    <div className='headerProjects'>
                        <h1>Current projects we're working on</h1>
                    </div>
                </div>
                    {/* <h1 className='project-header'>Project 1</h1>
                <div className='project'>
                    <div><img className='project1' src={project} alt="loading" /></div>
                    <h3 className='project-info'>This is one of our projects</h3>
                </div>
                <h1 className='project-header'>Project 2</h1>
                <div className='project'>
                    <div><img className='project1' src={project} alt="loading" /></div>
                    <h3 className='project-info'>This is another one of our projects</h3>
                </div> */}
                
                {this.props.users.length ?  
                 this.props.projects.map((item, i) => {
                    console.log(this.state.editPost)
                        if (this.state.editPost === null) { return <div key={i}>
                            <h1>YOURE AN ADMIN and not editing</h1>
                            <h1 className='project-header'>{item.title}</h1>
                                <div className='project'>
                                    <div>
                                        <img className='project1' src={item.img} alt="" />
                                    </div>
                                    <h3 className='project-info'>{item.comment_section}</h3>
                                </div>
                                <button onClick={ () => {
                                    this.setState({
                                        editPost: item.id})}}>EDIT</button>
                        </div>} else { return <div key={i}>
                            <h1>YOURE AN ADMIN and you are editing</h1>
                            <input type='text' className='project-header' onChange={ (en) => {
                                this.setState({
                                    inputTitle: en.target.value
                                })
                            }}></input>
                                <div className='project'>
                                    <div>
                                        <img className='project1' src={item.img} alt="" />
                                    </div>
                                    <input type='text' className='project-info' onChange={ (e) => {
                                        this.setState({
                                            inputComment: e.target.value
                                        })
                                    }}></input>
                                </div>
                                <button onClick={ () => {
                                    this.setState({
                                        editPost: item.id
                                    })}}>EDIT
                                </button>
                                <button>SAVE</button>

                        </div>

                        }
                })
                    : 
                    this.props.projects.map((item, i) => {
                    console.log(item)
                        return <div key={i}>
                            <h1 className='project-header'>{item.title}</h1>
                                <div className='project'>
                                    <div>
                                        <img className='project1' src={item.img} alt="" />
                                    </div>
                                    <h3 className='project-info'>{item.comment_section}</h3>
                                </div>
                        </div>
                })  }
            </div>
        )
    }
}


function mapStateToProps(state) {
    if (!state) return {};
    return {projects: state.projects,
            users: state.users};
  }


  export default connect(mapStateToProps, {getProjects})(Projects)