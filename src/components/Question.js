//투자 성향 테스트 질문&보기 렌더링
// radio인지 checkbox인지 확인해서 선택지 보여주기
// 보기 선택하면 handleChange 함수 호출 -> 점수 기록

import React from "react";

const Question = ({ questionData, handleChange }) => {
  const { id, question, type, choices } = questionData;

  return (
    <div className="choiceBox">
      <p className="testQuestion" style={{marginBottom : "30px", fontSize : "18px"}}> {question} </p>
      {choices.map((choice) => (
        <div className="option" key={choice.id}>
          {type === "radio" ? (
            <label>
              <input
                className="checker"
                type="radio"
                name={`q${id}`}
                value={choice.score}
                onChange={handleChange}
              />
              {choice.text}
            </label>
          ) : (
            <label>
              <input
                className="checker"
                type="checkbox"
                name={`q${id}`}
                value={choice.score}
                onChange={handleChange}
              />
              {choice.text}
            </label>
          )}
        </div>
      ))}
    </div>
  );
};

export default Question;