import { useState } from "react";

function App() {
  const [text, setText] = useState("안녕하세요");
  function login() {
    setText("로그인 되었습니다.");
  }

  function logout() {
    setText("로그아웃 되었습니다.");
  }

  return (
    <>
      <h1>{text}</h1>
      <button onClick={login}>로그인</button>
      <button onClick={logout}>로그아웃</button>
    </>
  );
}

export default App;
