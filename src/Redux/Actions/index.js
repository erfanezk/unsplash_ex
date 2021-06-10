import Unsplash from '../../api/Unsplash'
import * as actionsType from './actionsType'
export const Unsplashapi = () => async (dispatch) => {
    const response = await Unsplash.get(`/search/photos?query=book&per_page=${30}`)
    dispatch({ type: 'UNSPLASH_API', payload: response.data.results })
}

export const changeImages=(term)=>async (dispatch)=>{
    const response = await Unsplash.get(`/search/photos?query=${term}&per_page=${30}`)
    dispatch({ type: 'UNSPLASH_API', payload: response.data.results })
}
export const changeHomeImage=(src)=>{
    localStorage.setItem('HomeTheme',src);
    return {
        type:actionsType.UPDATE_HOME_PAGE_IMAGE,
        payload:src
    }
}
export const addImage=src=>{
    return {
        type:actionsType.ADD_IMAGE,
        payload:src
    }
}