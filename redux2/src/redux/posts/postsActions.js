import axios from "axios";

export const GET_POSTS_REQUESTS_SENT = "GET_POSTS_REQUESTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";
export const GET_POSTS_ASYNC = "GET_POSTS_ASYNC";

export const getPostsAsync= () => {
    const actionObject = {
        type: GET_POSTS_ASYNC
    };

    return actionObject;
}

export const getPostsRequestSent = () =>{
    const actionObj = {
        type: GET_POSTS_REQUESTS_SENT        
    }

    return actionObj
}

export const getPostsSuccess = (users) =>{
    const actionObj = {
        type: GET_POSTS_SUCCESS,
        payload: users
    }    

    return actionObj;
}


export const getPostsFailure = (errorMessage)=>{
    const actionObj = {
        type: GET_POSTS_FAILURE,
        payload: errorMessage
    }

    return actionObj;
}

// export const getUserAsync = () =>{
//     return (dispatch) => {
//         dispatch(getPostsRequestSent());
        
//         axios.get("https://jsonplaceholder.typicode.com/posts")
//         .then(response =>{
//             const posts = response.data
//             dispatch(getPostsSuccess(posts))
//         })

//         .catch(error => {
//             const errorMessage = error.message;
//             dispatch(getPostsFailure(errorMessage))
//         })
//     }
// }