import React, { useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  height: 50px;
`;

const ViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 500px;
  height: 50px;
`;

function InputSample() {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  const onReset = () => {
    setName("");
    setNickName("");
  };

  return (
    <div>
      <InputWrapper>
        <input
          name="name"
          placeholder="이름"
          onChange={onChangeName}
          value={name}
        />
        <input
          name="nickname"
          placeholder="닉네임"
          onChange={onChangeNickName}
          value={nickName}
        />
        <button onClick={onReset}>초기화</button>
      </InputWrapper>

      <ViewWrapper>
        값 :{" "}
        {`${name ? name : "이름이 없습니다."}:(${
          nickName ? nickName : "별명이 없습니다."
        })`}
      </ViewWrapper>
    </div>
  );
}

export default InputSample;
