import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import './Projects.css';


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
            </div>
        )
    }
}