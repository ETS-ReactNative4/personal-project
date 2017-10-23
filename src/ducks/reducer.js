const initialState = {
    users: [],
    projects: [],
    first_name:'',
    last_name:'',
    message:''
  }

  const GET_PROJECTS = 'GET_PROJECTS'
  
  // Action Types
  export function getProjects(allProjects){
    return{
      type: GET_PROJECTS,
      payload: allProjects
    }
  }

  
  // Reducer
  export default function reducer( state = initialState, action ) {
    switch(action.type) {
      case GET_PROJECTS:
        return Object.assign({}, state, {projects: action.payload});
  
      default: 
        return state;
    }
    
  }