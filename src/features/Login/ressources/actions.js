import {LOGIN_USER, LOGIN_SUCCEFULL, LOGIN_FAILED, SET_USER_IN_STORE} from './action-type';

export const loginUser = user => {
    console.log("inside action ",user);
    return {
        type: LOGIN_USER,
        payload: user
    }
}
export const loginUserSuccefull = user => {
    return {
        type: LOGIN_SUCCEFULL,
        payload: user
    }
}
export const loginUserFailed = error => {
    return {
        type: LOGIN_FAILED,
        payload: error
    }
}
export const setUserInStore = () => {
    return {
        type: SET_USER_IN_STORE
    }
}