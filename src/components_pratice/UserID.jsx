import React from "react";

const UserID = (props) => {
  function inputId(e) {
    props.input(e.target.value);
  }
  return (
    <div>
      <label htmlFor="id">ID:</label>
      <input type="text" id="id" onChange={inputId} />
    </div>
  );
};

export default UserID;
