import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";



// //로그인 이전만 사용가능
// import MainPage from "./startPage/MainPage"; //메인페이지
// import SignUpPage from "./startPage/SignUpPage"; //회원가입
// import LogInPage from "./startPage/LogInPage"; //로그인
// import StartHeader from "./startPage/StartHeader"; //헤더

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

import './App.css';

// function MainRoute(){
//   return(
//     <div>
//       <StartHeader/>
//       <Routes>
//         <Route path="/main" exact Component={MainPage}/>
//         <Route path="/Login" exact Component={LogInPage}/>
//         <Route path="/Signup" exact Component={SignUpPage}/>
//       </Routes>
//     </div>
    
//   )
// }

function RouteList() {
  return(
    <Routes>
      {/* 로그인 이후 사용 가능 */}
      <Route path="/home" exact Component={Home} />
      <Route path="/portfolio" exact Component={Portfolio}/>
      <Route path="/recommendation" exact Component={Recommendation}/>
      <Route path="/mypage" exact Component={MyPage}/>
      <Route path="/test" exact Component={TestPage}/>
      <Route path="/result/:investmentType" exact Component={ResultPage}/>
      <Route path="/interests" exact Component={InterestPage}/>
      <Route path="/portfolio/addStock" exact Component={AddStock}/>
    </Routes>
  )
}
 
function App() {
  return (
    <div className="App" style={{display:'flex'}}>
      <BrowserRouter>
      <div>
        <Sidebar/>
        <div className="AppContainer">
          <Header/>
          <RouteList/>
        </div>
      </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;