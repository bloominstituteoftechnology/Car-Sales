import { combineReducers } from 'redux';
import Reducer from './Reducer'

export default combineReducers({
    posts: postReducer
})