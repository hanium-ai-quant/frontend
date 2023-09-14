// 트렌드 종목, 포트폴리오 종목, 종목 이미지 연결 필요
// 현재 종목 이미지 : css 확인용 임시 이미지
// 종목명 등 prop으로 만들어서 전달 필요

import React from 'react';
import "./styles/Home.css";
import Slides from "../components/Portfolio";
import List from "../components/List";
import BigChart from "../components/Chart";
import Card from 'react-bootstrap/Card';

function Home() {

  const style = {
    width : "25rem",
    height : "300px",
    border : "none",
  };

  return (
    <div className="Home"> { /* App 컴포넌트는 App.css 파일을 참조합니다. */}
      {/* My Portfolio 창 */}
      <div className='myPortfolio'> {/*가장 위에 있는 주식 그래프 슬라이드 컴포넌트*/}
        <p className='PageName'> My Portfolio </p>
        <div  className="slides-container">
          <Slides />
        </div>
      </div>
      <div className='stockChart'>
        {/* Trends 창 */}
        <div className='Trends-Container'>
          <p className='PageName'> Trends </p>
          <div style={{borderRadius:"20px", padding : "30px 30px 0px 30px", backgroundColor:"#ffffff"}}>
            <p style={{marginBottom : "30px", fontWeight:"bold"}}> Company Name </p>
            { /*가장 아래에 위치한 주식 그래프 컴포넌트를 감싸는 부트스트랩 카드 컴포넌트*/}
            <Card border="info" style={style}>
              <BigChart /> {/*가장 아래에 위치한 주식 그래프 컴포넌트*/}
            </Card>
          </div>
        </div>
        {/* ALL 창 */}
        <div className="list-container"> {/*중간에 위치한 주식 목록 컴포넌트*/}
          <p className='PageName'> ALL </p>
          <List />
        </div>
      </div>
    </div>
  );
}

export default Home;
