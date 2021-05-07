import React from "react";
import { Link } from "react-router-dom";
import { NavStyle } from "./Nav.styles";

const Nav = () => {
  return (
    <NavStyle>
        <h3 className="navbar-title">Google Books</h3>
        <ul className="navbar-tabs">
          <li className="navbar-tabs--tab">
            <Link className="navbar-tab" to="/">Search</Link> 
          </li>
          <li className="navbar-tabs--tab">
            <Link className="navbar-tab" to="/saved">Saved</Link>
          </li>
        </ul>
    </NavStyle>
   
  )
}

export default Nav;