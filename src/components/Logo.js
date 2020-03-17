import styled from "@emotion/styled";
import React from "react";
import Questionmark from "./Questionmark.svg";

const Img = styled.img`
  width: 45px;
  height: 45px;
  margin: 1rem;
  transition: ease-in-out 2s;
  &:hover {
    transform: rotate(360deg);
  }
`;

function Logo(props) {
  return <Img src={Questionmark} alt="Question Mark Logo" />;
}

export default Logo;
