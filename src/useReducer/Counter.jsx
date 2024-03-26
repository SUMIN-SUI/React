import React, { useReducer } from "react";
import countReducer from "./countReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(countReducer, 0);

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state}</b>입니다.
      </p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -1
      </button>
    </div>
  );
};

export default Counter;
