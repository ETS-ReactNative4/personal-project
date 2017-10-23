const initialState = {
    users: [],
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

  export function getUserInfo(info){
    return{
      type: GET_USER_INFO,
      payload: info
    }
  }

  
  // Reducer
  export default function reducer( state = initialState, action ) {
    switch(action.type) {
      case GET_PROJECTS:
        return Object.assign({}, state, {projects: action.payload});
      case GET_USER_INFO:
        return Object.assign({}, state, {users: action.payload})
  
      default: 
        return state;
    }
    
  }