import React from "react";
import "./App.css";
import { Container, Description } from "./Styles/styled";

function App() {
  return (
    <Container>
      <text>hello world</text>
      <h1>Dog App</h1>
      <Description>
        <ul>
          This is dog app using React, Redux, TypeScript and Dog API. The app
          uses:
          <li>ReactJS & TypeScript</li>
          <li>Redux for state management</li>
          <li>Axios for fetching Data</li>
          <li>Styled Components</li>
          <li>Unit Tests with Jest & React Testing Library</li>
        </ul>
        <br />
        <p>
          Created by{" "}
          <a href="https://github.com/KhamHti/" target="_blank" rel="no referrer">
            Kham{" "}
          </a>
        </p>
      </Description>
    </Container>
  );
}

export default App;
