import axios from 'axios';
import {BASE_URL_API} from '../api/constants';

export const authenticateUser = async (user) => {
    return await axios.post(`${BASE_URL_API}/login`,user)
                .then(res =>{
                    return {
                        token: res.data.access_token
                    }
                })
                .catch(err => {throw err;});
}

export const SignUpUserService = async (user) => {
    return await axios.post(`${BASE_URL_API}/Users`,user)
                 .then(res => {
                    
                 })
                 .catch(err => {throw err});
}