import { createStore, combineReducers } from 'redux';
import UserReducer from './reducers/UserReducer'





const rootReducer = combineReducers ({

  user: UserReducer
   
})

export default createStore(
    rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());