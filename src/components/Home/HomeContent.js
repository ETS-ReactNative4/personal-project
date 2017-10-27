import React from 'react';
import './Home.css';
import {connect} from 'react-redux';
import { getUserInfo } from '../..//ducks/reducer';
import HomeProjects from './HomeProjects';




function HomeContent() {
        return(
            <div>
                <div className='sub-header'>
                    <h2>TLC ROCK</h2>
                    <h4> Our employees have extensive and varied experience in a variety of construction projects.<br />
                        We have the skills that are needed to quickly and effectively address the challenges that arise<br />
                        during each project. We value our employees’ contribution to our success and we believe that<br />
                        their safety is crucial. We are always seeking quality individuals who want to be part of our team.<br />
                    </h4>
                </div>
                <HomeProjects />
                <a href='http://localhost:3013/auth'><button>Login</button></a>
                <a href='http://localhost:3013/auth/logout'><button>Log out</button></a>
            </div>
        )
    }

    function mapStateToProps(state) {
        if (!state) return {};
        return {users: state.users};
      }
    
    
      export default connect(mapStateToProps, {getUserInfo})(HomeContent)