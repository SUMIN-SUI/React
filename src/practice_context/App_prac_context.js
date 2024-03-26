import React, { createContext } from "react";
import ColorBox from "./ColorBox";

export const backColor = createContext("green");

const App_prac_context = () => {
  const color = prompt("원하는 색상을 입력하세요");

  return (
    <backColor.Provider value={color}>
      <ColorBox />
    </backColor.Provider>
  );
};

export default App_prac_context;
