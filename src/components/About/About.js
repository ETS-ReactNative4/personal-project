import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import './About.css'


export default class About extends Component {

    render() {
        return (
            <div>
                <div className='about-hero'>
                <NavBar />
                    <div className='about-us'>
                        <h1>TLC ROCK</h1>
                        <h3>
                            is a custom crushing operation capable of crushing up to 750 tons per hour. We have been in business for 15 years. TLC is managed by Kevin Larsen who oversees the operation and maintains quality control.
                            We are a completely mobile operation able to mobilize to our customer’s site and process there materials on site.  We specialize in construction aggregates such as road base, drain rock, crushed rock and fill materials, as well as washed rock products. 
                            We have the abilities to RECYCLE concrete and asphalt turning them in to valuable materials that save resources and space in our landfills.
                            Our Equipment is well maintained and up to date to keep down time to a minimum so we can be as efficient as possible while working on you project.
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}