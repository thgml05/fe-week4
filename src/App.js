import { useState } from "react";
import InputSample from "./component/Input";
import Problem from "./component/Problem";
import Calculator from "./component/calculator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        gdgdgd
      </button>
      {/* 이름, 닉네임 입력 부분 */}
      <InputSample />
      {/* 오류 해결 부분 */}
      <Problem />
      {/* 계산기 부분 */}
      <Calculator />
    </>
  );
}

export default App;
