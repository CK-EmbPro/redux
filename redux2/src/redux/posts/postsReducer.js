import { GET_POSTS_FAILURE, GET_POSTS_REQUESTS_SENT, GET_POSTS_SUCCESS } from "./postsActions"

const initialState = {
    isLoading: false,
    posts: [],
    error: ""
}

const postsReducer = (state = initialState, action) => {
    const {type, payload}  = action
    switch(type){
        case GET_POSTS_REQUESTS_SENT:
            return {
                ...state,
                isLoading: true

            }

        case GET_POSTS_SUCCESS:
            return {
                ...state, 
                isLoading: false,
                posts: payload,
                error: ""
            }

        case GET_POSTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                posts: [],
                error: payload
            }

        default:
            return state
    }
}

export default postsReducer;