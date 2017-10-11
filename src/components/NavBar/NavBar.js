import React, { Component } from 'react';
import './NavBar.css'

export default class NavBar extends Component{
    render(){
        return(
            <div>
                <div className='NavBar'>
                    <div>HOME</div>
                    <div>PROJECTS</div>
                    <div className='logo'>LOGO</div>
                    <div>ABOUT</div>
                    <div>CONTACT US</div>                    
                </div>
            </div>
        )
    }
}