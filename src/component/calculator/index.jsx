import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 350px;
  height: 450px;
  border: 2px solid black;
`;

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

const NumberBox = styled.div`
  width: 280px;
  height: 280px;
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
`;

const Number = styled.button`
  width: 70px;
  height: 70px;
  background-color: #ffffff;
  border: 1px solid lightgray;
  font-size: 18px;
  &:hover {
    background-color: #b3e8e5;
  }
`;

let result = 0;
let num = "";
let numArr = [];
let operArr = [];

function Calculator() {
  const [text, setText] = useState("");
  const [reset, setReset] = useState(false);

  useEffect(() => {
    setText("");
    result = 0;
    num = "";
    numArr = [];
    operArr = [];
  }, [reset]);

  const onClick = (e) => {
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
      setText(result);
    } else if (e.target.value >= "0" && e.target.value <= "9") {
      num += e.target.value;
      setText(text + e.target.value);
    } else {
      operArr.push(e.target.value);
      numArr.push(parseInt(num));
      setText("");
      num = "";
    }
  };

  return (
    <Box>
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
