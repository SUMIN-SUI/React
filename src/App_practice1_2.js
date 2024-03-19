import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function countNum() {
    setCount(count + 1);
  }

  function resetNum() {
    setCount(0);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={countNum} onMouseOut={resetNum}>
        클릭
      </button>
    </>
  );
}

export default App;
