import styled from "styled-components";
import { useEffect, useState } from "react";

const ProblemWrapper = styled.button`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const Problem = () => {
  const [count, setCount] = useState(0);
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    // 발생원인 : count를 제대로 인식을 못함
    // 해결방법 : arrow 함수를 통해 count 변수를 설정해줌
    setCount((count) => count + 1);
  }, [isClick]);

  return (
    <ProblemWrapper>
      {count ? count : 0}
      <button onClick={() => setIsClick(!isClick)}>button</button>
    </ProblemWrapper>
  );
};

export default Problem;
