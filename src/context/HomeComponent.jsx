import React, { useContext } from "react";
import "./HomeComponent.scss";
import HeaderComponent from "./HeaderComponent";
import MainComponent from "./MainComponent";
import FooterComponent from "./FooterComponent";
import { ThemeContext } from "styled-components";

const HomeComponent = () => {
  const data = useContext(ThemeContext);
  console.log(data);

  return (
    <div className="container">
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  );
};

export default HomeComponent;
