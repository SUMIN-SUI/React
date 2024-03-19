import { useState } from "react";

function App() {
  const [color, setColor] = useState({ color: "black" });

  function red() {
    setColor({ color: "red" });
  }

  function green() {
    setColor({ color: "green" });
  }

  function blue() {
    setColor({ color: "blue" });
  }

  return (
    <>
      <h1 style={color}>글자색 바꾸기</h1>
      <button onClick={red}>빨간색</button>
      <button onClick={green}>초록색</button>
      <button onClick={blue}>파란색</button>
    </>
  );
}

export default App;
