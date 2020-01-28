import { SIGN_UP_USER, SIGN_UP_FAILED, SIGN_UP_SUCCEFULL } from "./action-type";

export const signUpUser = (user) => {
    return {
        type: SIGN_UP_USER,
        payload: user
    }
}
export const signUpUserSuccesfull = () => {
    return {
        type: SIGN_UP_SUCCEFULL
    }
}

export const signUpUserSuccesFailed = (error) => {
    return {
        type: SIGN_UP_FAILED,
        payload: error
    }
}