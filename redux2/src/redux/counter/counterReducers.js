import { DECREASE, INCREASE, RESET } from "../counter/conterActions"

const InitialState = {
    count: 0
}


const counterReducer = (state = InitialState, action) => {
    const { type } = action

    switch (type) {
        case INCREASE:

            return {
                count: state.count + 1
            };

        case DECREASE:

            return {
                count: state.count -1
            };

        case RESET:

            return {
                count:0
            };


        default:
            return state
    }
}


export default counterReducer