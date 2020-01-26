import {call , put, takeLatest} from 'redux-saga/effects';
import { authenticateUser } from '../../../services/auth/Auth';
import { LOGIN_USER} from './action-type';
import { loginUserSuccefull, loginUserFailed } from './actions';
import  AccesTokenStorage from '../../../utils/auth/AccessTokenStorage';
import {isNetworkError} from '../../../utils/catchNetworkError';

function* AuthenticatingUser(values){
    try {
        const {login,password, history} = values.payload
        const token = yield call(authenticateUser,{login,password});
        const user = {
            login: values.payload.login,
            token: token.token,
            authenticated: true
        }
        yield AccesTokenStorage.set(token.token);
        yield put(loginUserSuccefull(user));
        yield call(forwardTo,history,'/users'); 
    }catch(e){
        if(isNetworkError(e))
            alert("Network error")
        else {
            if(e.response.status === 401)
                yield put(loginUserFailed("Le Login ou le mot de passe ne correspond à aucun compte."));
        }
        console.log(e.isAxiosError);
    }
}

export function* watchAuthenticate(){
    yield takeLatest(LOGIN_USER,AuthenticatingUser)
}
function forwardTo(history,to){
    history.push(to);
}

