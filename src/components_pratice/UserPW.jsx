import React from "react";

const UserPW = (props) => {
  function inputPw(e) {
    props.input(e.target.value);
  }
  return (
    <div>
      <label htmlFor="pw">PW:</label>
      <input type="password" id="pw" onChange={inputPw} />
    </div>
  );
};

export default UserPW;
