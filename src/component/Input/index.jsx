import React, { useState } from "react";
import styled from "styled-components";

// 이름, 닉네임 입력하는 박스
const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  height: 50px;
`;

// 입력에 대한 출력 값을 나타내는 박스
const ViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 500px;
  height: 50px;
`;

function InputSample() {
  // name : 이름 값이 저장될 변수
  const [name, setName] = useState("");
  // nickName : 닉네임 값이 저장될 변수
  const [nickName, setNickName] = useState("");

  // 이름 값이 입력되면 실행될 함수
  const onChangeName = (e) => {
    setName(e.target.value); // name 변수의 값 변경
  };

  // 닉네임 값이 입력되면 실행될 함수
  const onChangeNickName = (e) => {
    setNickName(e.target.value); // nickName 변수의 값 변경
  };

  // 초기화 버튼을 누르면 실행될 함수
  const onReset = () => {
    // name, nickName 변수 값 초기화
    setName("");
    setNickName("");
  };

  return (
    <div>
      <InputWrapper>
        {/* 이름 입력 박스 */}
        <input
          name="name"
          placeholder="이름"
          onChange={onChangeName}
          value={name}
        />
        {/* 닉네임 입력 박스 */}
        <input
          name="nickname"
          placeholder="닉네임"
          onChange={onChangeNickName}
          value={nickName}
        />
        {/* 초기화 버튼 */}
        <button onClick={onReset}>초기화</button>
      </InputWrapper>

      {/* 입력 값 출력 부분 */}
      <ViewWrapper>
        값 :{" "}
        {/* 삼항 연산자를 사용하여 name, nickName 값이 없는 경우 초기값을 설정해둠 */}
        {`${name ? name : "이름이 없습니다."}:(${
          nickName ? nickName : "별명이 없습니다."
        })`}
      </ViewWrapper>
    </div>
  );
}

export default InputSample;
