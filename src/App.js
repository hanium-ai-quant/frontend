import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from 'react-redux';



// //로그인 이전만 사용가능
import MainPage from "./startPage/MainPage"; //메인페이지
import SignUpPage from "./startPage/SignUpPage"; //회원가입
import LogInPage from "./startPage/LogInPage"; //로그인
import StartHeader from "./startPage/StartHeader"; //헤더
import SuccessPage from "./startPage/SuccessPage"; //회원가입 성공 페이지

// 로그인 이후 사용가능
import Sidebar from "./components/Sidebar"; //사이드바
import Header from "./components/Header"; //헤더
import Home from "./pages/Home"; //홈화면
import Portfolio from "./pages/Portfolio"; //포트폴리오화면
import AddStock from "./components/AddStock"; // 종목 추가 화면(모달창)
import Recommendation from "./pages/Recommendation"; //추천화면
import MyPage from "./pages/Mypage"; //마이페이지화면
import TestPage from "./pages/TestPage"; //성향 평가 화면
import ResultPage from "./pages/ResultPage"; //성향 평가 결과 화면
import InterestPage from "./pages/IntersetPage"; //관심분야 설정 화면

import Auth from "./hoc/auth";
import './App.css';

// <로그인, 회원가입, 로그인 상태 확인> 성공하면 Routes 합치기
// 현재는 화면을 보기 위해서 Routes 분리해둔 상황!!

// function RouteList() {
//   <Routes>
//      <Route exact path="/main/*" Component={Auth(MainPage,false)}/>
//       <Route exact path="/login/*" Component={Auth(LogInPage, false)}/>
//       <Route exact path="/signup/*" Component={Auth(SignUpPage,false)}/>
//       <Route exact path="/success/*" Component={Auth(SuccessPage,false)}/>
//       <Route exact path="/home" Component={Auth(Home,true)} />
//       <Route exact path="/portfolio" Component={Auth(Portfolio,true)}/>
//       <Route exact path="/recommendation" Component={Auth(Recommendation,true)}/>
//       <Route exact path="/mypage" Component={Auth(MyPage,true)}/>
//       <Route exact path="/test" Component={Auth(TestPage,true)}/>
//       <Route exact path="/result/:investmentType" Component={Auth(ResultPage,true)}/>
//       <Route exact path="/interests" Component={Auth(InterestPage,true)}/>
//       <Route exact path="/portfolio/addStock" Component={Auth(AddStock,true)}/>
//   </Routes>
// }

// 로그인 X
function NoLogin() {
  return(
    <div>
      <StartHeader/>
      <Routes>
        <Route exact path="/" Component={Auth(MainPage,false)}/>
        <Route exact path="/login/*" Component={Auth(LogInPage, false)}/>
        <Route exact path="/signup/*" Component={Auth(SignUpPage,false)}/>
        <Route exact path="/success/*" Component={Auth(SuccessPage,false)}/>
      </Routes>
    </div>
  )
}

// 로그인 O
// 나중에 true로 바꾸기
function YesLogin() {
  return(
    <div>
      <Sidebar/>
      <div className="AppContainer">
        <Header/>
        <Routes>
          <Route exact path="/home" Component={Auth(Home,true)} />
          <Route exact path="/portfolio" Component={Auth(Portfolio,true)}/>
          <Route exact path="/recommendation" Component={Auth(Recommendation,true)}/>
          <Route exact path="/mypage" Component={Auth(MyPage,true)}/>
          <Route exact path="/test" Component={Auth(TestPage,true)}/>
          <Route exact path="/result/:investmentType" Component={Auth(ResultPage,true)}/>
          <Route exact path="/interests" Component={Auth(InterestPage,true)}/>
          <Route exact path="/portfolio/addStock" Component={Auth(AddStock,true)}/>
        </Routes>
      </div>
    </div>
  )
}

function App({ isAuthenticated }) {
  return (
    <BrowserRouter>
      {/* 로그인 여부에 따라 렌더링 다르게 */}
      {!isAuthenticated? 
        <NoLogin/>
        :
        <YesLogin/>
      }
    </BrowserRouter>

  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.userData && state.userData.loginSuccess, // 로그인 성공 여부에 따라 사용자 인증 여부 확인
});

export default connect(mapStateToProps)(App);