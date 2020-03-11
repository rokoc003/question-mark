import React from "react";
import "./Header.css";
import Questionmark from "./Questionmark.svg";

function Header() {
  return (
    <header className="header">
      <h1>QuestionMark</h1>
      <img className="logo" src={Questionmark} alt="Question Mark Logo" />
    </header>
  );
}

export default Header;
