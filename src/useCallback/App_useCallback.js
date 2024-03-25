import React, { useCallback, useState } from "react";
// import UseCallBackComponent1 from "./UseCallBackComponent1";
// import UseCallBackComponent2 from "./UseCallBackComponent2";
import ChildComponent from "./ChildComponent";

const App_useCallback = () => {
  const [count, setCount] = useState(0);

  const updateHandler = useCallback(() => {
    console.log("update");
  }, []);

  return (
    <div>
      {/* <UseCallBackComponent1 /> */}
      {/* <UseCallBackComponent2 /> */}
      <input type="number" onChange={(e) => setCount(e.target.value)} />
      <ChildComponent update={updateHandler} />
    </div>
  );
};

export default App_useCallback;
