import React from "react";
import { useNavigate } from "react-router-dom";

function SuccessPage() {

    const navigate = useNavigate();

    const container = {
        position : "relative",
        top : "90px",
        backgroundColor : "#f8f8f8",
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        padding : "100px"
    }

    // 환영 문구
    const welcomeTxt =  {
        color : "#6425fe",
        fontWeight : "bold",
    }

    const stockwiseTxt = {
        backgroundColor : "rgba(243, 232, 126, 0.26)",
        padding : "5px",
    }

    // 환영 멘트
    const longTxt = {
        backgroundColor : "#ffffff",
        padding : "30px",
        margin : "50px 0px",
        textAlign : "left",
        width : "50%",
        borderRadius : "20px",
    }

    // 종목 추천 버튼
    const goBtn = {
        padding : "15px 50px",
        border : "none",
        backgroundColor : "#6F6AF8",
        borderRadius : "20px",
        color : "#ffffff",
        cursor : "pointer",
    }

    // 종목 추천 받으러 가기 버튼
    const onClick = () => {
        navigate("/login");
    }

    return(
        <div style={container}>
            <h2 style={welcomeTxt}>
                반갑습니다! <br/>
                <span style={stockwiseTxt}>STOCKWISE</span>에 오신 것을 환영합니다
            </h2>
            <div style={longTxt}>
                <p>
                    StockWise에 가입해주셔서 감사드립니다. <br/><br/>
                    우리와 함께 주식 투자 여정을 시작해보세요. <br/><br/>
                    당신의 고유한 투자 성향에 따라 맞춤형 주식 종목 추천과 재무 지식을 제공해드리겠습니다. <br/><br/>
                    주식 시장에서 더욱 지혜롭게 투자할 수 있도록 도와드리겠습니다. <br/><br/>
                    풍부한 정보와 신뢰성 있는 서비스를 통해 최상의 투자 결정을 내리는데 도움이 될 것입니다.
                </p>
            </div>
            <button style={goBtn} onClick={onClick}> 종목 추천 받으러 가기! </button>
        </div>
    )
}
export default SuccessPage;