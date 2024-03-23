import React from "react";

const BooleanComponent = ({ bored }) => {
  const message = bored ? "놀러가자" : "하던일 열심히 마무리하기";
  return (
    <>
      <p>{message}</p>
    </>
  );
};

export default BooleanComponent;
