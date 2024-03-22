import React, { useState, useEffect } from "react";
function AddName() {
  const [names, setNames] = useState(["정수아", "리액트"]);
  const [input, setInput] = useState("");

  function InputChange(e) {
    setInput(e.target.value);
  }
  function uploadInput() {
    setNames([input]);
  }

  //   useEffect(() => {
  //     console.log("렌더링이 완료되었습니다.");
  //     console.log({ names });
  //   });

  //   useEffect(() => {
  //     console.log("렌더링이 완료되었습니다.");
  //     console.log({ names });
  //   }, []);

  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
    console.log({ names });

    return () => {
      console.log("cleanup");
      console.log({ names });
    };
  }, [names]);

  return (
    <div>
      <input type="text" onChange={InputChange} />
      <button onClick={uploadInput}>추가</button>
      <div>
        {names.map((name, idx) => (
          <p key={idx}>{name}</p>
        ))}
      </div>
    </div>
  );
}
export default AddName;
