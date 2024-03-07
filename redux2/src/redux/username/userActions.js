export const UPDATE_USERNAME = "UPDATE_USERNAME";
export const RESET_USERNAME = "RESET_USERNAME";

export const updateUsername = (username) =>{
    const actionObj = {
        type: UPDATE_USERNAME,
        payload: username
    }

    return actionObj
}

export const resetUsername = () =>{
    const actionObj = {
        type: RESET_USERNAME,
    }

    return actionObj
}
