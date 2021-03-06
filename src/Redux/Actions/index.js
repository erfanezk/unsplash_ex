import Unsplash from "../../api/Unsplash";
import * as actionsType from "./actionsType";
export const Unsplashapi = (term) => async (dispatch) => {
  const response = await Unsplash.get(
    `/search/photos?query=${term}&per_page=${20}`
  );
  dispatch({ type: "UNSPLASH_API", payload: response.data.results });
};

export const changeImages = (term) => async (dispatch) => {
  const response = await Unsplash.get(
    `/search/photos?query=${term}&per_page=${20}`
  );
  dispatch({ type: "UNSPLASH_API", payload: response.data.results });
};
export const changeHomeImage = (src) => {
  localStorage.setItem("HomeTheme", src);
  return {
    type: actionsType.UPDATE_HOME_PAGE_IMAGE,
    payload: src,
  };
};
export const addImage = (src) => {
  return {
    type: actionsType.ADD_IMAGE,
    payload: src,
  };
};

export const getUserPhotos = (username) => async (dispatch) => {
    const response = await Unsplash.get(`/users/${username}/photos`);
    console.log(response);
    dispatch({ type: "INDIVISUAL_API", payload: response.data });
  };

export const getUserLiked=username=>async dispatch=>{
    const response = await Unsplash.get(`/users/${username}/likes`)
    dispatch({type:"LIKED_API",payload: response.data })
}
export const classification =term=>{
  return{
    type:'CLASSIFICATION',
    payload:term
  }
}
