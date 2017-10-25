import axios from 'axios';

const initialState = {
    user: false,
    projects: [],
    first_name:'',
    last_name:'',
    message:''
  }

  const GET_PROJECTS = 'GET_PROJECTS';
  const GET_USER_INFO = 'GET_USER_INFO';
  
  // Action Types
  export function getProjects(allProjects){
    return{
      type: GET_PROJECTS,
      payload: allProjects
    }
  }

  export function getUserInfo(){
    const userData = axios.get('/auth/me')
    .then( res => {
        return res.data
    })
    return{
      type: GET_USER_INFO,
      payload: userData
    }
  }

  
  // Reducer
  export default function reducer( state = initialState, action ) {
    switch(action.type) {
      case GET_PROJECTS:
        return Object.assign({}, state, {projects: action.payload});
      case GET_USER_INFO + '_FULFILLED':
        console.log('it worked')
        return Object.assign({}, state, {user: action.payload});
        case GET_USER_INFO + '_PENDING':
        console.log('its pending')
        return Object.assign({}, state)
        case GET_USER_INFO + '_REJECTED':
        console.log('it was rejected')
        return Object.assign({}, state)
  
      default: 
        return state;
    }
    
  }