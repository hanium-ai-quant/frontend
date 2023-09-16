//포트폴리오에 아무것도 없을때 화면
import React from "react";
import emptyImg from "../assets/empty.png";


function NoPortfolio() {

    return(
        <div style={{textAlign:'center', marginTop:'150px'}}>
            <img src={emptyImg} alt="empty-img"/>
            <p> 포트폴리오가 비어있습니다. </p>
            
        </div>
    );
};

export default NoPortfolio;