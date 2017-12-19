import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class MobileNav extends Component{
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
                <MuiThemeProvider>
                    <AppBar
                    title='TLC Rock Products'
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    style={{ backgroundColor: "#000000" }}
                    onClick={this.handleToggle}
                    />
                    <Drawer
                    docked={false}
                    width={300}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}
                    >
                        <MenuItem>
                          <Link style={{textDecoration: 'none', color: 'black'}}to='/'><div className='head'><h3>HOME</h3></div></Link>
                        </MenuItem>
                        <MenuItem>
                          <Link style={{textDecoration: 'none', color: 'Black'}} to='/projects'><div className='head'><h3>PROJECTS</h3></div></Link>                
                        </MenuItem>
                        <MenuItem>
                          <Link style={{textDecoration: 'none', color: 'black'}} to='/about'><div className='head'><h3>ABOUT</h3></div></Link>
                        </MenuItem>
                        <MenuItem>
                         <Link style={{textDecoration: 'none', color: 'black'}} to='/contactUs'><div className='head'><h3>CONTACT US</h3></div></Link>                 
                        </MenuItem>
                    </Drawer>
                </MuiThemeProvider>
            </div>
            
        )
    }
}