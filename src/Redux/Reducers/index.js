
import {combineReducers} from 'redux'
import UnsplashReducer from './UnsplashReducer'
import UiReducer from './UiReducer'
import classificationName from './ClassificationName'
export default combineReducers({
    UnsplashReducer : UnsplashReducer,
    UiReducer:UiReducer,
    classificationName:classificationName
})