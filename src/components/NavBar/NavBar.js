import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import logoma from './logoma.png';

export default class NavBar extends Component{
    constructor(){
        super();
        this.state= {
            open: false
        }
    }
handleToggle = () => this.setState({ open: !this.state.open });
    
handleClose = () => this.setState({ open: false });


    render(){
        return(
            <div>
                <div className='NavBar'>
                <a className='logo-name'href="tlcrockproducts.win"><h1 className='TLC'>TLC Crushing</h1></a>
                    <Link style={{textDecoration: 'none', color: 'white'}}to='/'><div className='head'><h3>HOME</h3></div></Link>
                    <Link style={{textDecoration: 'none', color: 'white'}} to='/projects'><div className='head'><h3>PROJECTS</h3></div></Link>
                    {/* <Link to='/'><div className='logo'>LOGO</div></Link> */}
                    <Link style={{textDecoration: 'none', color: 'white'}} to='/about'><div className='head'><h3>ABOUT</h3></div></Link>
                    <Link style={{textDecoration: 'none', color: 'white'}} to='/contactUs'><div className='head'><h3>CONTACT US</h3></div></Link>                 
                </div>
            </div>
            
        )
    }
}
