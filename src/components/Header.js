//헤더 로그인 후 모든 창에 들어간다.
//로그인 정보에서 이름과 사진 가져와야 함!!
//지금은 임시로 넣어둠!
//사진 설정안하면 기본 이미지가 들어감!

import React from "react";
import { NavLink } from "react-router-dom";
import userImg from '../assets/user.png';
import "./styles/Header.css"

function Header() {
    const userName = "Matt"; //이름 가져오는걸로 수정해야 함.

    return (
        <div className="Header">
            <p className="Header-text">Hello, <span className="Header-userName">{userName}</span></p>
            <NavLink className="Header-userIcon" to="/mypage">
                <img className="Header-userImg" src={userImg} alt="userImg"/>
            </NavLink>
        </div>
    );
}

export default Header;