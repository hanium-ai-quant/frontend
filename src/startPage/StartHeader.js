//로그인 이전 메인화면의 헤더

import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as SVGIcon } from './img/logo.svg';

import "./styles/StartHeader.css";

// Logo SVG
function Logo() {
    return (
        <NavLink to="/">
            <div className="SVGIcon">
                <SVGIcon style={{width:"180px", height:"auto"}} />
            </div>
        </NavLink>
    )
}

// User Link
function UserLinks() {
    return(
        <div className="GoLink">
            <NavLink to="/LogIn" className="login-Link"> 로그인 </NavLink>
            <NavLink to="/SignUp" className="signup-Link"> 회원가입 </NavLink>
        </div>
    )
}

function StartHeader() {
    return(
        <div className="startHeader">
            <Logo/>
            <UserLinks/>
        </div>
    )
}

export default StartHeader;