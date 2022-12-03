/* eslint-disable eqeqeq */
let userTokenAll = {};
if(localStorage.getItem('token')){
    userTokenAll = localStorage.getItem('token')
}

const intialStateUser = {
    isLogin: false,
    user: [],
    userTokenAll
};


function useReducer(state = intialStateUser, action) {

    switch(action.type) {
        case 'GET_USER_LIST':
            const newUser = {...state, isLogin: true, user: action.payload, userTokenAll}
            return newUser;
        // case "REMOVE_USER":
        //     const stateID = state.user
        //     const newState = stateID.filter(function(item){
        //         return item.id != action.payload;
        //     });
        //     console.log("item",stateID)
        //     return newState

        default:
            return state;
    }
};

export default useReducer;