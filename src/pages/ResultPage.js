//투자 테스트 페이지 경로 설정

import React from "react";
import { useParams } from "react-router-dom";
import Result from '../components/Result'

const ResultPage = () => {
    const {investmentType} = useParams();

    return <Result investmentType={investmentType} />;
}

export default ResultPage;