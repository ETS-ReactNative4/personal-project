import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import './ContactUs.css'
import axios from 'axios';
import fb from './fb.png'

export default class ContactUs extends Component {
    constructor(){
        super()
        this.state ={
            from: '',
            subject: '',
            message: ''
        }
        this.mailerInfo = this.mailerInfo.bind(this)
    }

    mailerInfo(e){
        e.preventDefault()
        axios.post('http://localhost:3013/contact', {
            to: 'alex.ells21@gmail.com',
            from: this.state.from,
            subject: this.state.subject,
            text: this.state.message
        }).then( res => {alert('Message sent')})
    }

    render() {
        let { from, subject, message } = this.state
        console.log('From: ' + from, 'Subject: ' + subject, 'Message: ' + message)
        return (
            <div>
                <div className='contact-hero'>
                    <NavBar />
                    <div className='contact-header'>
                    </div>
                    <div className='contact-input'>
                        <h1 className=''>Contact Us</h1>
                        <form className='mailerstuff'>
                            <input type="text" name="from" placeholder="Whats your email" value={this.state.from} onChange={ (e) => {
                                this.setState({
                                    from: e.target.value
                                })
                            }}  required />
                            <input type="text" name="subject" placeholder='Subject' value={this.state.subject} onChange={ (e) => {
                                this.setState({
                                    subject: e.target.value
                                })
                            }} required />
                            <input type="text" name="text" placeholder='Input message' value={this.state.message} onChange={ (e) => {
                                this.setState({
                                    message: e.target.value
                                })
                            }} className='mytext' required />
                            <input type="submit" value="Send your Message" onClick={ (e)=> this.mailerInfo(e) } />
                        </form>
                    </div>
                    <div className='fbLink'>{fb.png}</div>
                </div>
            </div>
        )
    }
}