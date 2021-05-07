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
    height: 100%;
    margin: 0;
    font-family: Roboto, sans-serif;
  }
`
export const BlockStyle = styled.div `
  width: 85%;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border: solid 2px gold;
  display: flex;
  flex-direction: column;

  h4.block-header {
    margin-top: 0;
    margin-bottom: 0.75rem;
  }
`