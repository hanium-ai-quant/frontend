//투자 성향 테스트 페이지
//서버로 성향 결과 POST 하기 -> API 주소 설정 필요
// 문항 체크 안하면 alert창 띄우기

import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import Question from "../components/Question";
import "./styles/TestPage.css"

function TestPage() {
    const [scores, setScores] = useState({}); //문항별 점수
    const navigate = useNavigate();

    // 선택결과 콘솔 확인용
    useEffect(() => {
        console.log(scores); // scores 값이 변경될 때마다 로그를 남김
    }, [scores]);

    //선택되면 해당 문항의 점수 배열에 저장하기!
    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(name);
        setScores({ ...scores, [name] : parseFloat(value)});
    };

    //선택된 문항의 점수를 모두 합하여 총점 계산하고 경로 설정해주기
    const handleSubmit = () => {
        
        //총점 계산
        const sum = Object.values(scores).reduce((acc, curr) => acc + curr, 0);
        let resultType = '';
        //투자 타입 결정
        if (sum <= 20) {
            resultType = '안정형';
        }
        else if (sum <= 40) {
            resultType = '안정추구형';
        }
        else if (sum <= 60){
            resultType = '위험중립형';
        }
        else if (sum <= 80){
            resultType = '적극투자형';
        }
        else{
            resultType = '공격투자형';
        }

        console.log(resultType);

        //api 전송 코드
        const interestType = {type : resultType};
        axios.post('API 주소',interestType)
            .then((response) => {console.log(response.data);})
            .then((error) => {console.log(error)});

        navigate(`/result/${resultType}`);
        
    };

    return (
        <div className="test-container">
            <p className="pageName"> Risk assessment </p>
            <p className ="ment"><span className="spolight">위험도</span>를 평가하고 나의 <span className="spolight">투자 성향</span>을 알아보세요! </p>
            <div className="testBox">
                <h4 style={{fontWeight:"bold", marginTop : "30px"}}> 투자 성향 테스트 </h4>
                <div className="testMain">
                    {questions.map((question) => (
                        <Question key={question.id} questionData={question} handleChange={handleChange} />
                    ))}
                </div>
                <button className="goResult" onClick={handleSubmit}> 결과 확인하기 </button>
            </div>
        </div>
    );
    
}

export default TestPage;