import React, { useRef, useState } from "react";

const Hooks_4 = () => {
  const [text, setText] = useState("");
  const newText = useRef("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setText(newText.current);
          console.log("렌더링 완료");
        }}
      >
        <input
          type="text"
          onChange={(e) => (newText.current = e.target.value)}
        />
        <button type="submit">전송</button>
      </form>
      <h3>전송된 단어: {text}</h3>
    </div>
  );
};

export default Hooks_4;
