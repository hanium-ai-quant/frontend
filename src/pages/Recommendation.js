// 추천된 종목 가져오는 코드 추가해야함! get!
import React from "react";
import { useState } from "react";
import stockImg from "../assets/user.png";
import "./styles/Recommendation.css";

function StockName(){
    let stockName = [
        {id : "Spotify"},
        {id : "Airbanb"},
        {id : "Shop"},
        {id : "SONY"},
    ]

    // 클릭된 버튼만 효과 적용!
    let [btnActive, setBtnActive] = useState(false);

    const handleClick = () => {
        setBtnActive(!btnActive);
    }

    return(
        <div className="stock-Container">
            <div className="stockBtns">
                {stockName.map((button) => 
                    <button 
                        className={"recoStockName" + (btnActive ? " active" : "")}
                        key = {button.id}  
                        onClick = {handleClick}                
                    >
                        <img src={stockImg} className="stockImg" alt="stockImg"/>
                        {button.id}
                    </button>
                )}
            </div>
        </div>
    )
}

function RecommStock(){
    return(
        <div className="Recommend">
            <p className="pageName"> Recommendation </p>
            <StockName/>
        </div>
    )
}

function Predict(){
    return(
        <div>
            <p className="pageName"> Prediction </p>
        </div>
    )
}


function Recommendation() {
    return(
        <div className="recommendPage">
            <RecommStock/>
            <Predict/>
        </div>
    );
}

export default Recommendation;