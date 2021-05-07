import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./App.styles";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Saved from "./pages/Saved";
import Home from "./pages/Home";

function App() {
  return (
   <>
   <GlobalStyle />
    <Router>
      <Nav />
      <Hero />
      <Switch>
        <main>
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/" component={Home} />
        </main>
      </Switch>
    </Router>
   </>
  );
}


export default App;
