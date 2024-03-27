import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMember } from "./userSlice";
import UserList from "./UserList";

const User = () => {
  const [user, setUser] = useState({ name: "", age: "", address: "" });

  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const addUser = (e) => {
    e.preventDefault();
    dispatch(addMember(user));
  };
  return (
    <div>
      <h1>전체 회원 수 : {userInfo.count} </h1>
      <form onSubmit={addUser}>
        이름:
        <input type="text" name="name" onChange={changeHandler} />
        <br />
        나이:
        <input type="number" name="age" onChange={changeHandler} />
        <br />
        지역:
        <input type="text" name="address" onChange={changeHandler} />
        <br />
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default User;
