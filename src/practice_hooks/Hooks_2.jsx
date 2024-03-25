import React, { useEffect, useState } from "react";

const Hooks_2 = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
  }, []);

  useEffect(() => {
    console.log("count 값이 완료되었습니다.");
  }, [count]);

  useEffect(() => {
    console.log("text 값이 완료되었습니다.");
  }, [text]);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        + 1
      </button>
      <hr />
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <h1>{text}</h1>
    </div>
  );
};

export default Hooks_2;
