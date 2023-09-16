// 로그인 인증 체크 기능

import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
// import { authUser } from "../startPage/user_action";

export default function (SpecificComponent, option, adminRoute = null){

    // null -> 아무나 출입 가능
    // true -> 로그인한 유저만 출입 가능(홈,포트폴리오,추천,마이페이지 ...)
    // false -> 로그인한 유저는 출입 금지(메인페이지, 로그인, 회원가입 페이지)

    function AuthenticationCheck(props) {
        const dispatch = useDispatch();

        useEffect(() => {
            // dispatch(authUser()).then(response => {

            //     console.log(response);
            //     // 로그인 X
            //     // 로그인 창으로 유도
            //     if(!response.payload.isAuth){
            //         if(option === true){
            //             props.history.push('/Login');
            //         }
            //     }
                
            //     // 로그인 O
            //     // 회원가입, 로그인 페이지로 접근하려고하면 메인페이지로 이동!
            //     if(adminRoute && !response.payload.isAdmin){
            //         props.history.push('/home');
            //     }
            //     else{
            //         if(option === false){
            //             props.history.push('/home')
            //         }
            //     }
            // })
        },[])
        return(
            <SpecificComponent/>
        )
    }

    return AuthenticationCheck

}