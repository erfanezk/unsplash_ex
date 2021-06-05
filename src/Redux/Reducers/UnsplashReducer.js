

const INITIAL_STATE = {
    Unsplash: []
}

const unsplash =  (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'UNSPLASH_API':
            return { ...state, Unsplash: action.payload }
        default:
            return state
    }
}

export default unsplash