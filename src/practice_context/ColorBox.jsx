import React, { useContext } from "react";
import { backColor } from "./App_prac_context";

const ColorBox = () => {
  const inputColor = useContext(backColor);

  const boxStyle = {
    background: inputColor,
    height: "100vh",
  };

  return <div style={boxStyle}></div>;
};

export default ColorBox;
