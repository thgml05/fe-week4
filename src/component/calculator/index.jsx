import React, { useEffect, useState } from "react";
import styled from "styled-components";

// 전체 계산기 박스
const Box = styled.div`
  width: 350px;
  height: 450px;
  border: 2px solid black;
`;

// 더해질 수와 계산 결과가 출력될 박스
const Input = styled.div`
  width: 300px;
  height: 60px;
  border: 2px solid lightgray;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  font-size: 18px;
  padding-right: 10px;
  display: flex;
  justify-content: right;
  align-items: center;
`;

// 각각의 숫자와 기호 박스를 포함하고 있는 전체 박스
const NumberBox = styled.div`
  width: 280px;
  height: 280px;
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
`;

// 각각의 숫자, 기호 박스
const Number = styled.button`
  width: 70px;
  height: 70px;
  background-color: #ffffff;
  border: 1px solid lightgray;
  font-size: 18px;
  // 각각의 박스에 마우스를 올리면 박스의 배경색이 바뀌도록 설정함
  &:hover {
    background-color: #b3e8e5;
  }
`;

// result : 최종 계산 결과 / num : 계산될 숫자를 저장할 문자열
// numArr : 계산될 정수 숫자를 차례로 저장하고 있는 배열 / operArr : 계산할 연산자를 저장하고 있는 배열
let result = 0;
let num = "";
let numArr = [];
let operArr = [];

function Calculator() {
  // text : Input 컴포넌트에 출력될 값을 저장하고 있는 변수 / reset : 모든 변수들을 초기화시키기 위해 사용될 bool형 변수
  const [text, setText] = useState("");
  const [reset, setReset] = useState(false);

  // reset 값이 true, false로 변할 때마다 모든 변수 초기화
  useEffect(() => {
    setText("");
    result = 0;
    num = "";
    numArr = [];
    operArr = [];
  }, [reset]);

  const onClick = (e) => {
    // '=' 버튼을 클릭한 경우 배열에 저장된 값들로 계산 진행
    if (e.target.value === "=") {
      numArr.push(parseInt(num));
      result = numArr[0];
      for (let i = 1; i < numArr.length; i++) {
        if (operArr[i - 1] === "+") {
          result += numArr[i];
        } else if (operArr[i - 1] === "-") {
          result -= numArr[i];
        } else if (operArr[i - 1] === "x") {
          result *= numArr[i];
        } else if (operArr[i - 1] === "/") {
          result /= numArr[i];
        }
      }
      // 최종 결과를 text 변수에 반영
      setText(result);
      // 0-9 숫자 버튼을 클릭한 경우
    } else if (e.target.value >= "0" && e.target.value <= "9") {
      num += e.target.value;
      setText(text + e.target.value);
      // 연산자 버튼을 클릭한 경우
    } else {
      operArr.push(e.target.value);
      numArr.push(parseInt(num));
      setText("");
      num = "";
    }
  };

  return (
    <Box>
      {/* text 값을 Input 박스에 출력 */}
      <Input>{text}</Input>
      <NumberBox>
        <Number value={7} onClick={onClick}>
          7
        </Number>
        <Number value={8} onClick={onClick}>
          8
        </Number>
        <Number value={9} onClick={onClick}>
          9
        </Number>
        <Number value="/" onClick={onClick}>
          /
        </Number>
        <Number value={4} onClick={onClick}>
          4
        </Number>
        <Number value={5} onClick={onClick}>
          5
        </Number>
        <Number value={6} onClick={onClick}>
          6
        </Number>
        <Number value="x" onClick={onClick}>
          x
        </Number>
        <Number value={1} onClick={onClick}>
          1
        </Number>
        <Number value={2} onClick={onClick}>
          2
        </Number>
        <Number value={3} onClick={onClick}>
          3
        </Number>
        <Number value="-" onClick={onClick}>
          -
        </Number>
        {/* '@' 버튼 클릭 시 reset 값이 계속 전환되도록 설정하여 계산을 위한 변수들이 모두 초기화 되로록함 */}
        <Number value="@" onClick={() => setReset(!reset)}>
          @
        </Number>
        <Number value={0} onClick={onClick}>
          0
        </Number>
        <Number value="+" onClick={onClick}>
          +
        </Number>
        <Number value="=" onClick={onClick}>
          =
        </Number>
      </NumberBox>
    </Box>
  );
}

export default Calculator;
