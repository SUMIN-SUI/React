// import TodaysPlan from "./TodaysPlan";
// import HeaderComponent from "./components/HeaderComponent";
// import BodyComponent from "./components/BodyComponent";
// import FooterComponent from "./components/FooterComponent";
// import ChangeFont from "./components/ChangeFont";
// import EventClick from "./components/EventClick";
// import ChangePropsValue from "./components/ChangePropsValue";
// import Hello from "./components/Hello";
// import ChangeValue from "./components/ChangeValue";
// import Spread from "./components/Spread";
// import ChangeArray from "./components/ChangeArray";
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
      {/* <TodaysPlan /> */}
      {/* <HeaderComponent />
      <BodyComponent />
      <FooterComponent /> */}

      {/* <ChangePropsValue name="최수민" /> */}
      {/* <Hello /> */}
      {/* <ChangeFont /> */}
      {/* <EventClick /> */}
      {/* <ChangeValue /> */}
      {/* <Spread /> */}
      {/* <ChangeArray /> */}
    </>
  );
}

export default App;
