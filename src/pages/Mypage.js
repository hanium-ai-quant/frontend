// 관심 종목 가져오는 코드 추가해야함! get!!

import React from "react";
import {NavLink} from "react-router-dom";
import MyInfo from "../components/MyInfo";
import "./styles/MyPage.css";

//관심 분야 보여주기!
function InteretStocks() {

    // 일단은 가상 데이터
    const interestField = [
        {id : "IT"},
        {id : "신소재"},
        {id : "에너지"},
        {id : "자본재"},
    ];
    
    //api 통신으로 데이터 받아오기
    
    const styles = {
        padding : "10px 20px",
        margin : "5px",
        borderRadius : "30px",
        backgroundColor : "#ffffff"
    }
    
    return(
        <div style={{display : "flex"}}> 
            {interestField.map((stocks) => 
                <p key={stocks.id} style={styles}> #{stocks.id} </p>
            )}
        </div>
    )
}

function MyPage() {
    return(
        <div className="mypage-container">
            <div className="MyInfo">
                <p className="pageName"> My Information </p>
                <MyInfo/>
            </div>
            <div>
                <div>
                    <p className = "pageName"> Interested Stocks </p>
                    <InteretStocks/>
                </div>
                <div>
                <div style={{marginTop : "50px"}}>
                    <p className="pageName"> Set Type </p>
                    <div className="profile-link">
                        <NavLink to="/test"> 투자성향 평가하기 </NavLink>
                        <NavLink to='/interests'> 관심분야 설정하기 </NavLink>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    );
}

export default MyPage;