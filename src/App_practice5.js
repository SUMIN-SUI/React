import { useState } from "react";
import UserID from "./components_pratice/UserID";
import UserPW from "./components_pratice/UserPW";

function App() {
  const loginId = "abc";
  const loginPw = "123";

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  function inputId(data) {
    setId(data);
  }

  function inputPw(data) {
    setPw(data);
  }

  function login() {
    loginId === id && loginPw === pw
      ? alert("로그인 성공")
      : alert("로그인 실패");
  }

  return (
    <>
      <UserID input={inputId} />
      <UserPW input={inputPw} />
      <button onClick={login}>Login</button>
    </>
  );
}

export default App;
