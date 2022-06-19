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
  // count : 1씩 더해질 수
  const [count, setCount] = useState(0);
  // isClick : true, false 값을 가지는 함수
  const [isClick, setIsClick] = useState(false);

  // isCLick 변수가 바뀔 때마다 count 값이 1씩 증가함
  useEffect(() => {
    // 발생원인 : count를 제대로 인식을 못함
    // 해결방법 : arrow 함수를 통해 count 변수를 설정해줌
    setCount((count) => count + 1);
  }, [isClick]);

  return (
    <ProblemWrapper>
      {count ? count : 0}
      {/* setIsClick을 통해 isClick 변수의 값이 계속 뒤집히도록 설정함 */}
      <button onClick={() => setIsClick(!isClick)}>button</button>
    </ProblemWrapper>
  );
};

export default Problem;
