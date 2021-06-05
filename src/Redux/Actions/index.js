import Unsplash from '../../api/Unsplash'

export const Unsplashapi = () => async (dispatch) => {
    const response = await Unsplash.get(`/search/photos?query=book&per_page=${30}`)
    dispatch({ type: 'UNSPLASH_API', payload: response.data.results })
}

export const changeImages=(term)=>async (dispatch)=>{
    const response = await Unsplash.get(`/search/photos?query=${term}&per_page=${30}`)
    dispatch({ type: 'UNSPLASH_API', payload: response.data.results })
}