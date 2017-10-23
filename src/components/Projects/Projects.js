import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import './Projects.css';
import { getProjects } from '../..//ducks/reducer';
import {connect} from 'react-redux';
import axios from 'axios';


class Projects extends Component {

    componentDidMount(){
        const{getProjects} = this.props;
        axios.get('http://localhost:3013/projects/img').then( res => {
            // console.log(res.data)
            getProjects(res.data)
        })
    }

    render() {
        console.log(this.props.users)
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
                    console.log(item)
                        return <div key={i}>
                            <h1>YOURE AN ADMIN</h1>
                            <h1 className='project-header'>{item.title}</h1>
                                <div className='project'>
                                    <div>
                                        <img className='project1' src={item.img} alt="" />
                                    </div>
                                    <h3 className='project-info'>{item.comment_section}</h3>
                                </div>
                        </div>
                }) : this.props.projects.map((item, i) => {
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