import React from "react";
import { Global, css } from "@emotion/core";

export default function GlobalStyles() {
  return (
    <Global
      styles={themes => css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          background-image: ${themes.colors.backgroundPrimary};
          height: 100vh;
          font-family: "Bellota Text", cursive;
        }
      `}
    />
  );
}
