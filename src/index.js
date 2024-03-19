import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import App from "./App";
// import App_practice1_2 from "./App_practice1_2";
// import App_practice3 from "./App_practice3";
// import App_practice4 from "./App_practice4";
import App_practice5 from "./App_practice5";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <App /> */}
    {/* <App_practice1_2 /> */}
    {/* <App_practice3 /> */}
    {/* <App_practice4 /> */}
    <App_practice5 />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
