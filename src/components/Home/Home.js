import React, { Component } from 'react';
import './Home.css';
import NavBar from '../NavBar/NavBar';
import { getUserInfo } from '../..//ducks/reducer';
import {connect} from 'react-redux';
// import axios from 'axios';

class Home extends Component {

    // componentDidMount(){
    //     const{getUserInfo} = this.props;
    //     axios.get('http://localhost:3013/users/admin').then( res => {
    //         console.log(res.data)
    //         getUserInfo(res.data)
    //     })
    // }

    render() {
        return (
            <div className='header'>
                <div className='hero-img'>
                <NavBar />
                {/* <video playsInLine autoPlay muted loop poster="" className='hero-img' id="bgvid">
                    <source src="https://d3ciwvs59ifrt8.cloudfront.net/8c05758d-460a-44f2-af7d-384a69e35e11/3961aac8-56e6-40b3-a724-dc7efc9f91f6.mp4" type="video/mp4" />
                </video> */}
                    <div className='heroHome'>
                        <h1>TLC</h1>
                        <h3>The Terry Larsen family of companies are constantly working hard to try and improve<br />
                            the work force and provide the best quality work. Our work force undergoes weekly<br />
                            training to maintain a safe work environment as well as increase productivity and<br />
                            quality of product.
                        </h3>
                    </div>
                </div>
                <div className='sub-header'>
                    <h2>TLC ROCK</h2>
                    <h4> Our employees have extensive and varied experience in a variety of construction projects.<br />
                        We have the skills that are needed to quickly and effectively address the challenges that arise<br />
                        during each project. We value our employees’ contribution to our success and we believe that<br />
                        their safety is crucial. We are always seeking quality individuals who want to be part of our team.<br />
                    </h4>
                </div>
                <div className='projects'>
                    <div className='img1'></div>
                    <div className='img2'></div>
                    <div className='img3'></div>
                    
                </div>
                <a href='http://localhost:3013/auth'><button>Login</button></a>
                {/* <a href='http://localhost:3013/auth/logout'><button>Log out</button></a> */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    if (!state) return {};
    return {users: state.users};
  }


  export default connect(mapStateToProps, {getUserInfo})(Home)