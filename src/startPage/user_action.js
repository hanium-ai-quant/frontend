// 로그인, 회원가입 API 전송

import axios from "axios";
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
} from './types';

// 로그인
export function loginUser(dataTosubmit) {
    const request = axios.post('API 주소', dataTosubmit)
        .then(response => response.data)

    return {
        type : LOGIN_USER,
        payload : request
    }
}

// 회원가입
export function registerUser(dataTosubmit){
    const request = axios.post('API 주소', dataTosubmit)
        .then(response => response.data)

    return {
        type : REGISTER_USER,
        payload : request
    }
}

// 사용자 인증 상태 확인
// export function authUser(){
//     // API 주소
//     const request = axios.get('/api/users/auth')
//         .then(response => response.data)

//     return {
//         type : AUTH_USER,
//         payload : request,
//     }
// }