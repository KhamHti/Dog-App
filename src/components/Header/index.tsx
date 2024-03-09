import React from "react";
import { Container, LogoContainer, TitleContainer } from "./styles";

const imgBot = require("../../assets/images/app_icon.png");

function Header() {
  return (
    <Container>
      <LogoContainer>
        <img src="https://dog.ceo/img/dog-api-logo.svg" alt="Dog App" />
      </LogoContainer>
      <TitleContainer>
        <h1>Kham's Dog Image Finder App</h1>
      </TitleContainer>
    </Container>
  );
}

export default Header;
