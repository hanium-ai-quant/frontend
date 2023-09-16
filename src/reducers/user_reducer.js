import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
} from "../startPage/types"


export default function (state = {}, action){
    switch(action.type) {
        // 로그인
        case LOGIN_USER:
            return {...state, loginSuccess : action.payload}
            break;

        // 회원가입
        case REGISTER_USER:
            return {...state, register : action.payload}
            break;
        // 사용자 인증상태 확인
        case AUTH_USER:
            return {...state, userData : action.payload}
            break;
        default:
            return state;
    }
}

