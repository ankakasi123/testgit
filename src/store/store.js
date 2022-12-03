import { combineReducers, legacy_createStore as createStore } from 'redux';

import authReducer from "./reducers/authReducer";
import useReducer from "./reducers/useReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    use: useReducer,
});
  
const store = createStore(
rootReducer, 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



export default store;