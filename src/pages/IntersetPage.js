// 관심종목 설정 페이지
// 데이터 서버로 전송하는거 추가하기

import React from "react";
import axios from "axios";
import { useState } from "react";
import { interests} from "../data/interests";
import "./styles/InterestPage.css";


//선택한 태그를 배열에 저장해서 서버로 보내주기
function InterestPage(){
    //선택된 버튼
    const [selectedButtons, setSelectedButtons] = useState([]);
    const [showButtons, setShowButtons] = useState(false);

    //버튼 선택 처리-> 누르면 배열에 저장하기, 이미 저장돼있으면 제거
    const handleButtonClick = (buttonId) => {
        const isButtonSelected = selectedButtons.includes(buttonId);

        if(isButtonSelected) {
            //선택됐으면 배열에서 제거하기
            setSelectedButtons((prevSelectedButtons) => 
                prevSelectedButtons.filter((id) => id !== buttonId)
            );
        }
        else {
            if (selectedButtons.length < 4) {
                setSelectedButtons((prevSelectedButtons) => [
                    ...prevSelectedButtons,
                    buttonId,
                ]);
            }
            else 
                alert("최대 4개까지만 선택 가능합니다.");
        }

    }

    //API 데이터 전송
    const handleSendData = (e) => {
        e.preventDefault();
        if (selectedButtons.length === 0) {
            alert('관심분야를 선택해주세요!');
        }
        setShowButtons(true);
        //API 전송
        axios.post('API 주소', selectedButtons)
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error))
        console.log(selectedButtons);
    };
 

    return(
        <div className="interest-Container">
            <p className="pageName"> Set Interested Stocks </p>
            <p className="ment"><span className="spolight">관심분야</span>를 선택하고 종목을 <span className="spolight">추천</span> 받아 보세요!</p>
            <div className = "interest-Main">
                <div className = "interests">
                    {interests.map((button) => 
                        <button 
                            className="interest-button"
                            key = {button.id} onClick={() => handleButtonClick(button.id)} 
                            style={{
                                background: selectedButtons.includes(button.id) ? '#EFE9FF' : 'white',
                                boxShadow : selectedButtons.includes(button.id) ? '2px 2px 5px rgba(0, 0, 0, 0.3)' : 'none',
                            }}
                        >
                            {button.id}
                        </button>
                    )}
                </div>
                
                <button className="setInterest-button" onClick={handleSendData}> 선택하기 </button>
                
                {showButtons && (
                    <div style={{margin : '50px'}}>
                        <a className="goLink" href="/mypage"> 마이페이지로 </a>
                        <a className="goLink" href="/test" style={{fontWeight : 600}}>투자성향 평가하러가기 </a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default InterestPage;