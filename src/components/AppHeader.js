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

function AppHeader() {
  return (
    <Header>
      <Title>QuestionMark</Title>
      <Logo className="logo" src={Questionmark} alt="Question Mark Logo" />
    </Header>
  );
}

export default AppHeader;
