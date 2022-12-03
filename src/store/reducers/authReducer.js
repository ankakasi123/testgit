

  let userToken = {};
  if(localStorage.getItem('token')){
    userToken = localStorage.getItem('token')
  }
  const intialStateAuth = {
      isLogin: false,
      user: {}, //userToken
      userToken
    }

    // console.log("intialStateAuth",intialStateAuth)
    
function authReducer(state = intialStateAuth, action) {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            const newState = {...state, isLogin: true, user: action.payload, userToken}
            return newState;
        

        default:
            return state;
    }
};

export default authReducer;