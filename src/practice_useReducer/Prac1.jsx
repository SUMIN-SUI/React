import React, { useReducer } from "react";

function reducer(state, action) {
  const totalPrice = state + action.price;
  return totalPrice;
}

const Prac1 = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>
        햄버거 가게
        <br />
        지불할 금액 : {state}원
      </h1>
      <button onClick={() => dispatch({ type: "burger", price: 4000 })}>
        🍔
      </button>
      <button onClick={() => dispatch({ type: "fries", price: 2000 })}>
        🍟
      </button>
      <button onClick={() => dispatch({ type: "coke", price: 2000 })}>
        🥤
      </button>
    </div>
  );
};

export default Prac1;
