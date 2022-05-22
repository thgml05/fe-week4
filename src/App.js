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
      <InputSample />
      <Problem />
      <Calculator />
    </>
  );
}

export default App;
