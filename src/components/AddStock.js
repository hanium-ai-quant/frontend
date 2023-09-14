//모달창 컴포넌트
//포트폴리오에 종목 추가하는 페이지
//폼 제출하는 거 추가하기(서버로)

import React, { useState } from "react";
import "./styles/AddStock.css";
import axios from "axios";

function AddStock({setModalOpen, handleAddStock}) {

    const [values, setValues] = useState({
        stockName : '',
        amount : 0,
        date : '',
        price : 0,
    });


    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name] : value,
        }));
    }
   

    //지금은 콘솔 출력만 -> 서버로 전송하는 코드 추가 필요
    const handleSubmit = (e) => {
        e.preventDefault();
        if(values.stockName === '' || values.date === ''){
            if(values.stockName === ''){
                alert('종목 이름을 입력하세요');
            }
            else{
                alert('매수 날짜를 입력하세요');
            }
        }
        else{
            //API 전송 
            axios.post('API 주소', values)
                .then((response) => console.log(response.data))
                .catch((response) => console.log('Error'))
            console.log(values);
        }        
    }
    
    //모달 창 닫기
    const modalClose = () => {
        setModalOpen(false);
    }
    
    return(
        <div className="modalContainer">
            <p className="containerName"> Add Stock </p>
            <form onSubmit={handleSubmit}>
                <div className="add-main">
                    <label > 종목 이름 </label>
                    <input name="stockName" value={values.stockName} onChange={handleChange}/>
                    <div className="add-optionBox">
                        <div className="add-option">
                            <label > 수량 </label>
                            <input type="number" name="amount" value={values.amount} onChange={handleChange} min={0}/>
                        </div>
                        <div className="add-option">
                            <label > 매수 날짜 </label>
                            <input type="date" name="date" value={values.date} onChange={handleChange}/>
                        </div>
                        <div className="add-option">
                            <label > 구매 금액 </label>
                            <input name="price" value={values.price} onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <div className="add-button">
                    <button onClick={modalClose} > 취소하기 </button>
                    <button type="submit"> 추가하기 </button>
                </div>
            </form>
            
        </div>
    )
    

}

export default AddStock;