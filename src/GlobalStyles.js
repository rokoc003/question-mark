import React from "react";
import { Global, css } from "@emotion/core";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          background-image: linear-gradient(to bottom right, #f8b271, #ffead6);
          height: 100vh;
          font-family: "Bellota Text", cursive;
        }
      `}
    />
  );
}
