import { RESET_USERNAME, UPDATE_USERNAME } from "./userActions";

const InitialState = {  
    username: "Default username"
}

const usernameReducer = (state = InitialState, action) => {
    const {type} = action;
    switch(type){
        case UPDATE_USERNAME:
            return {
                username: action.payload,
            };
        
        case RESET_USERNAME:
                return InitialState
    

        default:
            return state
        
    }
}

export default usernameReducer;