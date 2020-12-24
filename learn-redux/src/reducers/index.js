import CounterReducer from './Counter'
import isLoggedReducer from './IsLogged'
import {combineReducers} from 'redux'
const allReducers=combineReducers({
    CounterReducer,isLoggedReducer
})
export default allReducers