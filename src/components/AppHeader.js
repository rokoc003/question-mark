import React from "react";
import Questionmark from "./Questionmark.svg";
import styled from "@emotion/styled";
import Title from "./Title";
import Logo from "./Logo";

const Header = styled.header`
  display: flex;
  justify-content: center;
  height: 80px;
  background-color: #ffcb9aab;
`;
const SwitchColorButton = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  outline: none;
`;

function AppHeader({ onSwitchColorButtonClick }) {
  return (
    <Header>
      <Title>QuestionMark</Title>
      <Logo className="logo" src={Questionmark} alt="Question Mark Logo" />
      <SwitchColorButton onClick={onSwitchColorButtonClick}>
        <span role="img" aria-label="Switch theme">
          🌗
        </span>
      </SwitchColorButton>
    </Header>
  );
}

export default AppHeader;
