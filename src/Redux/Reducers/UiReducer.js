import * as actionsType from "../Actions/actionsType";
import image from "../../assets/piyush-dubey-XNf4uAnkdn0-unsplash.jpg";
const setedImage = localStorage.getItem("HomeTheme");
const initialState = {
  backgrundImage: setedImage || image,
};
const UiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.UPDATE_HOME_PAGE_IMAGE:
      return {
        ...state,
        backgrundImage: action.payload,
      };

    default:
      return state;
  }
};
export default UiReducer;
