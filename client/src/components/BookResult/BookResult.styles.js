import styled from "styled-components";

export const BookStyle = styled.div `
  margin-bottom: 2rem;

  .result-header {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }

  .result-header--title {
    grid-row: 1;
    grid-column: 1 / span 3;
  }

  .result-header--buttons {
    grid-row: 1;
    grid-column: 4 / -1;
    justify-content: end;
  }

  h4,
  h5 {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  button.result-button {
    margin-right: auto;
    margin-left: 1rem;
    padding: 4rem;
    width: 50px;
  }

  .result-body {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin-bottom: 1.5rem;
  }

  .image-col {
    grid-row: 1;
    grid-column: 1 / span 2;
  }

  .info-col {
    grid-row: 1;
    grid-column: 4 / -1;
    display: flex;
    align-items: center;
  }

  @media (max-width: 600px) {
    .result-header--title {
      grid-row: 1;
    }
    .result-header--buttons {
      grid-row: 2;
      grid-column: 1 / span 2;
    }
  }
  @media (max-width: 700px) {
    .image-col {
      align-self: center;
    }
    .info-col {
      grid-row: 2;
      align-self: center;
      grid-column: 1 / span 12;
    }
  }
`