import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "deposit":
      return state + action.sum;
    case "withdraw":
      return state - action.sum;
    default:
      return state;
  }
}

const Prac2 = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  const [money, setMoney] = useState(0);

  return (
    <div>
      <h1>금액을 입력하세요.</h1>
      <input
        type="number"
        value={money}
        onChange={(e) => setMoney(parseInt(e.target.value))}
      />
      <h1>입금 또는 출금 버튼을 클릭하세요.</h1>
      <button onClick={() => dispatch({ type: "deposit", sum: money })}>
        입금
      </button>
      <button onClick={() => dispatch({ type: "withdraw", sum: money })}>
        출금
      </button>
      <h1>현재 잔액: {state}</h1>
    </div>
  );
};

export default Prac2;
