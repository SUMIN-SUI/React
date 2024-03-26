import { useState } from "react";
import { ThemeContext } from "styled-components";
import HomeComponent from "./HomeComponent";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <HomeComponent />
    </ThemeContext.Provider>
  );
}

export default App;
