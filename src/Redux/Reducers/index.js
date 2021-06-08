
import {combineReducers} from 'redux'
import UnsplashReducer from './UnsplashReducer'
import UiReducer from './UiReducer'
export default combineReducers({
    UnsplashReducer : UnsplashReducer,
    UiReducer:UiReducer
})