import React, { useState } from "react";

const Hooks_1 = () => {
  const [foods, setFoods] = useState(["초콜릿", "사탕"]);
  const [newFood, setNewFood] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    setFoods((prevState) => {
      return [newFood, ...prevState];
    });
    setNewFood("");
  };

  return (
    <div onSubmit={addItem}>
      <form>
        <input
          type="text"
          onChange={(e) => {
            setNewFood(e.target.value);
          }}
          value={newFood}
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {foods.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hooks_1;
