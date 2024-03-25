import React, { useEffect, useRef, useState } from "react";

const Hooks_3 = () => {
  const [count, setCount] = useState(0);

  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log("렌더링 완료");
  }, [count]);

  return (
    <div>
      <h1>Count : {count}</h1>
      <h1>렌더링 횟수: {renderCount.current}</h1>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
};

export default Hooks_3;
