const initialState = {
    user: {},
    users: [],
    posts: [],
    post: {},
    loggedInStatus: false,
    authenticated: false,
    notifications: [],
    followers: [],
    follows: [],
    podcast_number: [],
    bio: [],
    friends: [],
    comments: [],
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
      case 'GET_USER': {
        return {...state,
          loading: false, 
          user: action.user
      }
      }
    //   case 'GET_ALL_USERS': {
    //     return {...state, 
    //       users: action.users
    //     }
    //   }
      case 'LOGIN': {
        return { ...state, 
            user: action.user,
            loggedInStatus: true,
            authenticated: true,
            loading: false
         }
      }
      case 'CREATE_USER': {
        return { ...state, 
            user: action.user,
            loggedInStatus: true,
            authenticated: true
         }
      }
      case 'EDIT_USER': {
        return { ...state, 
            user: action.user,
            loggedInStatus: true,
            authenticated: true
         }
      }
      case 'LOGOUT': {
        return { ...state, 
          loggedInStatus: false,
          authenticated: false
        }
      }
      default: {
        return state;
      }
    }
}