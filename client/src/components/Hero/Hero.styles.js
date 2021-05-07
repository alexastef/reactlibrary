import styled from "styled-components";
import HeroImage from "../../images/alfons-morales.jpg";

export const HeroStyles = styled.div `
  width: 85%;
  margin: auto;
  background-image: url(${HeroImage});
  background-size: cover;
  height: 30vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;

  h1,
  h4 {
    margin: 0;
  }
  h1 {
    font-family: Merriweather, serif;
    padding-top: 1rem;
  }

  h4 {
    padding: 1rem;
  }
`