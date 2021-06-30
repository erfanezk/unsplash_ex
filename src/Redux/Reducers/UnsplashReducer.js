const INITIAL_STATE = {
  Unsplash: [],
  individualPhotos: [],
  liked: [],
};

const unsplash = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UNSPLASH_API":
      return { ...state, Unsplash: action.payload };
    case "INDIVISUAL_API":
      return { ...state, individualPhotos: action.payload };
    case "LIKED_API":
      return { ...state, liked: action.payload };
    default:
      return state;
  }
};

export default unsplash;
