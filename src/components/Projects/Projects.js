import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import './Projects.css';
import project from './project.jpg'


export default class Projects extends Component {

    render() {
        return (
            <div>
                <div className='heroProjects'>
                    <NavBar />
                    <div className='headerProjects'>
                        <h1>Current projects we're working on</h1>
                    </div>
                </div>
                    <h1 className='project-header'>Project 1</h1>
                <div className='project'>
                    <div><img className='project1' src={project} alt="loading" /></div>
                    <h3 className='project-info'>This is one of our projects</h3>
                </div>
                <h1 className='project-header'>Project 2</h1>
                <div className='project'>
                    <div><img className='project1' src={project} alt="loading" /></div>
                    <h3 className='project-info'>This is another one of our projects</h3>
                </div>
            </div>
        )
    }
}