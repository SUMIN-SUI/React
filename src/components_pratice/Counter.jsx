import React, { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const countClick = () => {
    setCount(count + 1);
    props.onAdd();
  };
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={countClick}>클릭</button>
    </div>
  );
};

export default Counter;
