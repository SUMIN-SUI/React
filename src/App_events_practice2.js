import { useState } from "react";

function App() {
  const areas = [
    { k: "서울", e: "Seoul" },
    { k: "부산", e: "Busan" },
    { k: "제주", e: "Jeju" },
  ];

  const [select, setSelect] = useState("");

  const clicked = (event) => {
    event.preventDefault();
    alert(select);
  };

  return (
    <>
      <h1>라디오 버튼의 value를 출력</h1>
      <form>
        {areas.map((area) => (
          <>
            <input
              type="radio"
              value={area.e}
              id={area.e}
              name="areas"
              onChange={(event) => {
                setSelect(event.target.value);
              }}
            />
            <label htmlFor={area.e}>{area.k}</label>
          </>
        ))}

        <input type="submit" value="확인" onClick={clicked} />
      </form>
    </>
  );
}

export default App;
