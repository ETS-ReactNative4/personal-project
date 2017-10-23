import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
// import logoma from './logoma.png';

export default class NavBar extends Component{
    render(){
        return(
            <div>
                <div className='NavBar'>
                    <Link to='/'><div>HOME</div></Link>
                    <Link to='/projects'><div>PROJECTS</div></Link>
                    <Link to='/'><div className='logo'>LOGO</div></Link>
                    <Link to='/about'><div>ABOUT</div></Link>
                    <Link to='/contactUs'><div>CONTACT US</div></Link>                 
                </div>
            </div>
        )
    }
}
