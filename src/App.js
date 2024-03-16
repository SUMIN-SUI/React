import TodaysPlan from "./TodaysPlan";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  const name = "name";
  const style = {
    color: "yellow",
  };
  return (
    <>
      {name === "name" ? <h1>hi</h1> : null}
      {/* {name === "name" && <h1 style={style}>hi</h1>} */}
      {name === "name" && <h1 style={{ color: "green" }}>hi</h1>}
      <TodaysPlan />
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
  );
}

export default App;
