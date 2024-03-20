import { useState } from "react";
import Counter from "./components_pratice/Counter";

function App() {
  const [totalCount, settotalCount] = useState(0);

  const addTotal = () => {
    settotalCount((prev) => prev + 1);
  };
  return (
    <>
      <h1>Total Count : {totalCount} </h1>
      <Counter onAdd={addTotal} />
      <Counter onAdd={addTotal} />
    </>
  );
}

export default App;
