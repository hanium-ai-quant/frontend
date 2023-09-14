// src/components/Sidebar.js
// 사이드바
// 로그아웃 기능 추가하기

import React from "react";
import { NavLink} from "react-router-dom";
import "./styles/Sidebar.css";
import logoImg from "../assets/logo.png";
import homeIcon from "../assets/home-icon.png";
import portfoiloIcon from "../assets/portfoilo-icon.png";
import recommendIcon from "../assets/recommend-icon.png";
import mypageIcon from "../assets/mypage-icon.png";

function Sidebar() {
    return (
        <div className = "sidebar">
            <div className="container"> 
                <div>
                    <NavLink className="navMenu" to="/">
                        <div className="logo-block">
                            <img className="logoimg" src={logoImg} alt="logo-img"/>
                        </div>
                    </NavLink>
                </div>
                {/* 클릭하면 검색 페이지로 이동하기 */}
                {/* 링크 필요 */}
                <div className="searchBox">
                    <NavLink className="searchInput"> Search for Various Stocks </NavLink>
                </div>
                <div className="sidebarItem">
                    <NavLink className="navMenu" to="/home" > 
                        <div className="menuItems">
                            <img className="menuIcon"  src={homeIcon} alt="home-icon" />
                            <span className="menuName"> Home </span>
                        </div>
                    </NavLink>
                    <NavLink className="navMenu" to="/portfolio">
                        <div className="menuItems">
                            <img className="menuIcon" src={portfoiloIcon} alt="portfolio-icon"/>
                            <span className="menuName"> Portfolio </span>
                        </div>
                    </NavLink>
                    <NavLink className="navMenu" to="/recommendation">
                        <div className="menuItems">
                            <img className="menuIcon" src={recommendIcon} alt="recommend-icon"/>
                            <span className="menuName"> Recommendation </span>
                        </div>
                    </NavLink>
                    <NavLink className="navMenu" to="/mypage">
                        <div className="menuItems">
                            <img className="mypageIcon" src={mypageIcon} alt="mypage-icon"/>
                            <span className="menuName"> MyPage </span>
                        </div>
                    </NavLink>
                </div>
            </div>
            {/* 로그아웃 버튼 */}
            <div>
                <button> 로그아웃 </button>
            </div>
        </div>
    );
}

export default Sidebar;