//포트폴리오 화면

import React, {useState} from "react";
import NoPortfolio from "../components/NoPortfolio";
import AddStock from "../components/AddStock";
import "./styles/Portfolio.css";

function Portfolio() {

  const [modalOpen, setModalOpen] = useState(false);
  const [stocks, setStocks] = useState(false); //저장된 종목이 있으면 true, 없으면 false

  const goAddStock = () => {
    setModalOpen(true);
  };

  const handleAddStock = () => {
    setModalOpen(false);
  }
    
  return (
    <div className="portfolio-container">
      <p className="pageName"> Portfolio </p>
      {!stocks ? <NoPortfolio/> : (<p> 포트폴리오 화면 </p>)}
      <div style={{textAlign:'center'}}>
        <button className="addStock-btn" onClick={goAddStock}> 종목 추가하기 </button>
        {modalOpen && <AddStock setModalOpen={setModalOpen} handleAddStock={handleAddStock}/>}
      </div>
    </div>
  );
}


export default Portfolio;