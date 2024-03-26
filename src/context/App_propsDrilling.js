import React, { createContext, useContext } from "react";

// function App() {
//   return <GrandParent value="Hello World!" />;
// }

// function GrandParent({ value }) {
//   return <Parent value={value} />;
// }

// function Parent({ value }) {
//   return <Child value={value} />;
// }

// function Child({ value }) {
//   return <Message value={value} />;
// }

// function Message({ value }) {
//   return <div>전달받은 데이터 : {value}</div>;
// }

const MyContext = createContext();

function App() {
  return (
    <MyContext.Provider value="Hello World!">
      <GrandParent />
    </MyContext.Provider>
  );
}

function GrandParent() {
  return <Parent />;
}
function Parent() {
  return <Child />;
}
function Child() {
  return <Message />;
}
function Message() {
  const value = useContext(MyContext);
  return <div>전달받은 데이터 : {value}</div>;
}

export default App;
