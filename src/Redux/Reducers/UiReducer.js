import * as actionsType from "../Actions/actionsType";
import image from "../../assets/piyush-dubey-XNf4uAnkdn0-unsplash.jpg";
import disert from "../../assets/marek-piwnicki-zZTwuBz74iI-unsplash.jpg";
import ger from "../../assets/jeremy-zero-rLVY6LLqalQ-unsplash.jpg";
import ember from "../../assets/eberhard-grossgasteiger-fcrSsepzDzg-unsplash.jpg";
import bozi from "../../assets/bozidar-vukadinovic-sNWMhlgfR3g-unsplash.jpg";
import zdek from "../../assets/zdenek-machacek-OlKkCmToXEs-unsplash.jpg";
import damn from "../../assets/damien-schnorhk-fVBWN3_ST0E-unsplash.jpg";
import james from "../../assets/james-donovan-kFHz9Xh3PPU-unsplash.jpg";
import sepn from "../../assets/spencer-bergen-bmqyS0HXV70-unsplash.jpg";
import _  from 'lodash';
const setedImage = localStorage.getItem("HomeTheme");
const initialState = {
  images: [disert, ger, ember, bozi, zdek,damn,james,sepn],
  backgrundImage: setedImage || image,
};
const UiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.UPDATE_HOME_PAGE_IMAGE:{
      const newImages = state.images;
      _.remove(newImages,(src)=>src===action.payload)
      newImages.unshift(action.payload)
      return {
        ...state,
        images:newImages,
        backgrundImage: action.payload
      };

    }
    case actionsType.ADD_IMAGE:
      const newImages = [...state.images];
      newImages.unshift(action.payload);
      return {
        ...state,
        images:newImages
      }
    default:
      return state;
  }
};
export default UiReducer;
