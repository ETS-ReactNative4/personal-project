import React, { Component } from 'react';
import './Home.css';
import NavBar from '../NavBar/NavBar';
import HomeContent from './HomeContent';
// import axios from 'axios';

export default class Home extends Component {

    // componentDidMount(){
    //     const{getUserInfo} = this.props;
    //     axios.get('/users/admin').then( res => {
    //         console.log(res.data)
    //         getUserInfo(res.data)
    //     })
    // }

    render() {
        return (
            <div className='header'>
                <div className='hero-img'>
                    <NavBar />
                        <div className='heroHome'>
                            <h1>TLC</h1>
                            <h3>The Terry Larsen family of companies are constantly working hard to try and improve<br />
                            the work force and provide the best quality work. Our work force undergoes weekly<br />
                            training to maintain a safe work environment as well as increase productivity and<br />
                            quality of product.
                            </h3>
                        </div>
                </div>
                    <HomeContent />
            </div>
        )
    }
}
  