import React, { useState, useRef } from "react";

const InputValue = () => {
  const [name, setName] = useState("soo");
  const [age, setAge] = useState(20);

  const nameRef = useRef();
  const ageRef = useRef();

  function changeHandler() {
    setName(nameRef.current.value);
    setAge(ageRef.current.value);
  }

  const style = {
    margin: "30px",
  };

  return (
    <div>
      <div style={style}>
        <h1>input 태그 value 값 지정</h1>
        이름 :
        <input
          type="text"
          value={name}
          ref={nameRef}
          //   onChange={(e) => setName(e.target.value)}
          onChange={(e) => changeHandler()}
        />
        나이 :
        <input
          type="number"
          value={age}
          ref={ageRef}
          //   onChange={(e) => setAge(e.target.value)}
          onChange={(e) => changeHandler()}
        />
      </div>
    </div>
  );
};

export default InputValue;
