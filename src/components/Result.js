//투자 성향 테스트 결과 페이지
//투자 성향 결과 서버로 전송하는 코드 추가하기

import React from "react";
import typeTable from "../assets/type-table.png";
import investmentTypeData from "../data/investmentType";
import "./styles/Result.css";

const Result = ({investmentType}) => {

    const {characteristics, strategy, comment} = investmentTypeData[investmentType] || {};

    return (
        <div className="Result-container">
            <p className="pageName"> Risk Profile </p>
            <div className="main"> 
                <h3 className="header-text" style={{marginBottom : "30px"}}> 현재 당신의 투자 성향은 <span className="type" >{investmentType}</span> 입니다.</h3>
                <br></br>
                <img className="typeTable" src={typeTable} alt="typeTable"/>
                <br></br>
                <br></br>
                <br></br>
                {investmentType && (
                    <div className="comment">
                        <h3 className="comment-title"> 투자 성향별 특징 </h3>
                        <p> {characteristics} </p>
                        <h3  className="comment-title"> 투자 전략 </h3>
                        <p> {strategy} </p>
                        <br></br>
                        <p className="annomitation"> {comment} </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Result;