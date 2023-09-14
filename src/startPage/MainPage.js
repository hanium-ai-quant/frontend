//메인 화면

import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SVGRecom } from './img/home.svg';
import { ReactComponent as SVGT1 } from './img/Frame Trend1.svg';
import { ReactComponent as SVGT2 } from './img/Frame Trend2.svg';

import "./styles/MainPage.css"

// Web Service info
function StockWiseInfo(){
  
  const navigator = useNavigate();

  const handleGoLogin = () => {
    navigator('/LogIn');
  }

  return(
      <div className="Info-Text">
        <p className="GetWise"> get wise! </p>
        <h1 style={{fontSize : "50px", fontWeight: 800}}> 
          Make Your <br/>
          <span style={{color : "#6425FE"}}> Customized Investment </span>
        </h1>
        <div className="Customize">
          <p style={{marginBottom : "100px"}}> 
            관심 분야와 투자 자산 비율 및 위험 부담 능력과 같은 당신의 투자 성향을<br/> 
            AI가 분석하여 맞춤형 서비스와 개인화된 종목 투자 추천을 제공해드립니다.
          </p>
          <p>회원 가입 후 맞춤형 투자 추천 받으러 가기</p>
        </div>
        <button className="GetStartBtn" onClick={handleGoLogin}> Get Started! </button>
        <div className='SVGRecom'>
          <SVGRecom width="770px" height="200%" />
        </div>      
    </div>
  )
}

// trend Stocks SVG
function TrendsStocks() {
    useEffect(() => {
        const trendsStock = document.querySelector('.trendsStock');
    
        function handleScroll() {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          const elementTop = trendsStock.getBoundingClientRect().top;
    
          if (elementTop < windowHeight * 0.8) {
            trendsStock.classList.add('slide-in');
          } else if (scrollY === 0) {
            trendsStock.classList.remove('slide-in');
          }
        }
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      return (
        <div className='trendsStock'>
          <p className='trendsT'>Trends Stocks</p>
          <div className="SVGT">
            <SVGT1 width="1000px" height="470px" />
            <SVGT2 width="1000px" height="470px" />
          </div>
        </div>
      );
}

function MainPage(){
    return(
      <div>
        <div className="StockWiseInfo">
            <StockWiseInfo/>
        </div>
        <div className="TrendStockDiv">
          <TrendsStocks/>
        </div>
      </div>
    )
}

export default MainPage;