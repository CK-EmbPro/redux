export const INCREASE = "INCREASE"
export const DECREASE = "DECREASE"
export const RESET = "RESET"


export const increaseCounter = () =>{
    const actionObj = {
        type: INCREASE
    }

    return actionObj;
}



export const decreaseCounter = () =>{
    const actionObj = {
        type: DECREASE
    }

    return actionObj;
}



export const resetCounter = () =>{
    const actionObj = {
        type: RESET
    }

    return actionObj;
}