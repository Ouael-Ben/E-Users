import {call , put, takeLatest} from 'redux-saga/effects';
import {isNetworkError} from '../../../utils/catchNetworkError';
import { signUpUserSuccesFailed, signUpUserSuccesfull } from './actions';
import { SignUpUserService } from '../../../services/auth/Auth';
import { SIGN_UP_USER } from './action-type';


function* RegisterUser(values){

    try {
        const {login, password,history} = values.payload;
        yield call(SignUpUserService,{login,password});
        yield put(signUpUserSuccesfull());
        yield call(forwardTo,history,'/login')
    }catch (e){
        if(isNetworkError(e)){
            alert("Network error")
            yield put(signUpUserSuccesFailed("Error internal"));
        }
        else {
            if(e.response.status === 401)
                yield put(signUpUserSuccesFailed("Ce login est deja existe."));
        }
    }

}

export function* watchSignUp(){
    yield takeLatest(SIGN_UP_USER,RegisterUser)
}
function forwardTo(history,to){
    history.push(to);
}
