import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import './ContactUs.css'

export default class ContactUs extends Component {

    render() {
        return (
            <div>
                <div className='contact-hero'>
                    <NavBar />
                    <div className='contact-header'>
                        <h1>Contact Us</h1>
                    </div>
                    <div className='contact-input'>
                        <form action="/contact-us" method="post">
                            <input type="text" name="from" placeholder="Whats your email" required />
                            <input type="text" name="subject" placeholder='Subject' required />
                            <input type="text" name="text" placeholder='Input message' class='mytext' required />
                            <input type="submit" value="Send your Message" />
                        </form>
                    </div>

                </div>
            </div>
        )
    }
}