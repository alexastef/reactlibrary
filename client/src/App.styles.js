import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;1,400;1,700&family=Roboto&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: Roboto, sans-serif;
  }
`