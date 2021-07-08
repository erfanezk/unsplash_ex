
import {combineReducers} from 'redux'
import UnsplashReducer from './UnsplashReducer'
import UiReducer from './UiReducer'
import classificationName from './ClassificationName'
import UIAnimation from './UIAnimation'
export default combineReducers({
    UnsplashReducer : UnsplashReducer,
    UiReducer:UiReducer,
    classificationName:classificationName,
    UIAnimation:UIAnimation
})