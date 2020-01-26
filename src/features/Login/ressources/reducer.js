import {LOGIN_USER,LOGIN_SUCCEFULL, LOGIN_FAILED, SET_USER_IN_STORE} from './action-type';
import AccessTokenStorage from '../../../utils/auth/AccessTokenStorage';
import decode from 'jwt-decode';

const initialState = {
    isLoading: null,
    user: {
        login: '',
        password: '',
        token: ''
    },
    error: null,
    authenticated: null
}
export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, isLoading: true,user: {...action.payload}};
        case LOGIN_SUCCEFULL:
            console.log("inside looooo")
            return {...state,isLoading: false, user : {...action.payload}}
        case LOGIN_FAILED:
            return {...state, isLoading: false, error: action.payload}
        case SET_USER_IN_STORE: 
            const token =  AccessTokenStorage.get();
            console.log(decode(token));
            return {...state}
        default:
            return state;
            
    }
}