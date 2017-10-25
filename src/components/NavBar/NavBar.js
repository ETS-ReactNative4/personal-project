import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
// import logoma from './logoma.png';

export default class NavBar extends Component{
    render(){
        return(
            <div>
                <div className='NavBar'>
                <h1>TLC Crushing</h1>
                    <Link style={{textDecoration: 'none'}}to='/'><div className='head'><h3>HOME</h3></div></Link>
                    <Link style={{textDecoration: 'none'}} to='/projects'><div className='head'><h3>PROJECTS</h3></div></Link>
                    {/* <Link to='/'><div className='logo'>LOGO</div></Link> */}
                    <Link style={{textDecoration: 'none'}} to='/about'><div className='head'><h3>ABOUT</h3></div></Link>
                    <Link style={{textDecoration: 'none'}} to='/contactUs'><div className='head'><h3>CONTACT US</h3></div></Link>                 
                </div>
            </div>
        )
    }
}
