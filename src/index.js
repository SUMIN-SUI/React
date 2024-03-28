import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App_router from "./router/App_router";

// import App from "./App";
// import App_practice1_2 from "./App_practice1_2";
// import App_practice3 from "./App_practice3";
// import App_practice4 from "./App_practice4";
// import App_practice5 from "./App_practice5";
// import App_events_practice1 from "./App_events_practice1";
// import App_events_practice2 from "./App_events_practice2";
// import App_events_practice3 from "./App_events_practice3";
// import App_style from "./style/App_style";
// import App_styled_components from "./style/App_styled_components";
// import App_styled_components_props from "./style/App_styled_components_props`";
// import FirstScssComponent from "./style/components/FirstScssComponent";
// import App_Nesting from "./style/App_Nesting";
// import App_ParentSelector from "./style/components/ParentSelector";
// import App_operations from "./style/components/Operations.jsx";
// import App_useEffect from "./useEffect/App_useEffect";
// import App_useRef from "./useRef/App_useRef";
// import App_useMemo from "./useMemo/App_useMemo";
// import App_useCallback from "./useCallback/App_useCallback";
// import App_practice_hooks from "./practice_hooks/App_practice_hooks";
// import App_propsDrilling from "./context/App_propsDrilling";
// import App_context from "./context/App_context";
// import App_useReducer from "./useReducer/App_useReducer";
// import App_prac_context from "./practice_context/App_prac_context";
// import App_prac_useReducer from "./practice_useReducer/App_prac_useReducer";

// Redux ⇩
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import App_redux from "./redux/App_redux";

// import store from "./redux_prac/store";
// import App_prac_redux from "./redux_prac/App_prac_redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <App /> */}
    {/* <App_practice1_2 /> */}
    {/* <App_practice3 /> */}
    {/* <App_practice4 /> */}
    {/* <App_practice5 /> */}
    {/* <App_events_practice1 /> */}
    {/* <App_events_practice2 /> */}
    {/* <App_events_practice3 /> */}
    {/* <App_style /> */}
    {/* <App_styled_components /> */}
    {/* <App_styled_components_props /> */}
    {/* <App_Nesting /> */}
    {/* <App_ParentSelector /> */}
    {/* <App_operations /> */}
    {/* <App_useEffect /> */}
    {/* <App_useRef /> */}
    {/* <App_useMemo /> */}
    {/* <App_useCallback /> */}
    {/* <App_practice_hooks /> */}
    {/* <App_propsDrilling /> */}
    {/* <App_context /> */}
    {/* <App_useReducer /> */}
    {/* <App_prac_context /> */}
    {/* <App_prac_useReducer /> */}

    {/* Redux ⇩ */}
    {/* <Provider store={store}>
      <App_redux />
    </Provider> */}
    {/* <Provider store={store}>
      <App_prac_redux />
    </Provider> */}
    <App_router />
  </>
);

reportWebVitals();
