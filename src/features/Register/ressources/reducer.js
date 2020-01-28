import { SIGN_UP_USER, SIGN_UP_SUCCEFULL, SIGN_UP_FAILED } from "./action-type";

const initialState = {
    isLoading: false,
    error: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_USER:
            return {...state,isLoading: true}
            
            break;
        case SIGN_UP_SUCCEFULL:
            return {...state, isLoading: false}
            break;
        case SIGN_UP_FAILED:
            return {...state, isLoading: false, error: action.payload}
        default:
            return {...state};
            break;
    }
}