import { useState } from "react";

function App() {
  const [message, setMessage] = useState({ title: "제목", color: "black" });

  function input(event) {
    setMessage({ title: event.target.value, color: "red" });
  }

  function result() {
    alert(message.title);
  }

  return (
    <>
      <h1 style={{ color: message.color }}>{message.title}</h1>
      <hr />
      <input type="text" onChange={input} />
      <button onClick={result}>클릭</button>
    </>
  );
}

export default App;
