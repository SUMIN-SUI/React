import React from "react";

const FirstProps = (props) => {
  const { name, color } = props;
  return (
    <>
      <h1>
        제 이름은 {name}입니다. <br />
        제가 좋아하는 색은 {color}입니다.
      </h1>
    </>
  );
};

export default FirstProps;
