import React from "react";
import "./App.css";
import Button from '@mui/base/Button';


// Logo Component
const Logo = () => (
    <div className="logo">
        <div className="stock-wise">
            <span className="text-wrapper">Stock</span>
            <span className="span"> Wise</span>
        </div>
        <div className="overlap-group-wrapper">
            <div className="div">
                <div className="group">
                    <div className="rectangle-wrapper">
                        <div className="rectangle" />
                    </div>
                </div>
                <div className="group-2">
                    <div className="rectangle-wrapper">
                        <div className="rectangle" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// Header Component
const Header = () => (
    <header className="header">
        <div className="logo-wrapper">
            <Logo />
        </div>
    </header>
);

// WelcomeMessage Component
const WelcomeMessage = () => (
    <div className="STOCKWISE">
        <span className="text-wrapper-2">
            반갑습니다!
            <br />
        </span>
        <span className="text-wrapper-3">STOCK</span>
        <span className="span">WISE</span>
        <span className="text-wrapper-4">에 오신 것을 </span>
        <span className="text-wrapper-2">환영합니다</span>
    </div>
);

// StockWiseMessage Component
const StockWiseMessage = () => (
    <p className="p">
        StockWise에 가입해주셔서 감사드립니다. <br />
        <br />
        우리와 함께 주식 투자 여정을 시작해보세요. <br />
        <br />
        당신의 고유한 투자 성향에 따라 맞춤형 주식 종목 추천과 재무 지식을 제공해드리겠습니다. <br />
        <br />
        주식 시장에서 더욱 지혜롭게 투자할 수 있도록 도와드리겠습니다. <br />
        <br />
        풍부한 정보와 신뢰성 있는 서비스를 통해 당신이 최상의 투자 결정을 내리는 데 도움이 될 것입니다.
    </p>
);

// Main Component
export const Screen = () => (
    <div className="screen">
        <div className="overlap-wrapper">
            <div className="overlap">
                <div className="view">
                    <div className="overlap-group">
                        <div className="desktop" />
                        <Header />
                    </div>
                </div>
                <div className="view-2">
                    <div className="frame">
                        <div className="overlap-group-2">
                            <div className="frame-2" />
                            <WelcomeMessage />
                        </div>
                        <h1 className="h-1">가입해주셔서 감사합니다.</h1>
                    </div>
                    <div className="stock-wise-wrapper">
                        <StockWiseMessage />
                    </div>
                    <Button className="btn">
                            종목 추천 받으러 가기!
                    </Button>
                </div>
            </div>
        </div>
    </div>
);
