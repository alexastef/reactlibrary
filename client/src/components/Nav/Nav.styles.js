import styled from "styled-components";

export const NavStyle = styled.nav `
  width: 100%;
  color: #191970;
  margin-top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  h3.navbar-title {
    font-family: Merriweather, serif;
    width: 60%;
    margin-left: 6%;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 0;
    padding: 1rem;
    flex: 0 0 60%;
  }

  ul.navbar-tabs {
    width: 40%;
    display: flex;
    align-items: flex-end; 
    justify-content: space-evenly;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li.navbar-tabs--tab {
    display: block;
    flex: 0 1 auto;
    text-decoration: none;
    padding: 0;
  }

  a.navbar-tab {
    text-decoration: none;
    display: block;
  }

  @media (max-width: 600px) {

    h3.navbar-title {
      margin-left: 0;
      align-items: flex-start;
    }

    ul.navbar-tabs {
      justify-content: space-around;
    }

    li.navbar-tabs--tab {
      padding: 0.5rem;
    }
  }
`