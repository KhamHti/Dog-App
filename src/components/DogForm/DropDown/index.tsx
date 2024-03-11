import { title } from "process";
import React from "react";
import { Container, DropdownContainer, ErrorText } from "./styles";

interface DropDownProps {
  title: string;
  children: React.ReactNode;
  showError: boolean;
}

function DropDown({ title, children, showError }: DropDownProps) {
  return (
    <Container>
      <h5>{title}</h5>
      <DropdownContainer showError={showError}>
        {children}
      </DropdownContainer>
        {showError && <ErrorText>Please choose a breed above</ErrorText>}
    </Container>
  );
}

export default DropDown;
