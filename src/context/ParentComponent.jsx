import React from "react";
import { MyContext } from "./Context";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <MyContext.Provider value="안녕하세요">
      <ChildComponent />
    </MyContext.Provider>
  );
};

export default ParentComponent;
