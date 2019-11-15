import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import { Route, Link } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage.js";
import Styled from 'styled-components';

const NavBar = Styled(Link)`
text-decoration: none;
color: white;
font-size: 150%;
margin-right: 2%;
margin-top: 15%;
margin-left: 10%;

&:hover {
  text-decoration: underline;
  background-color: black;
}


`

export default function App() {
  return (
    <div>
      <nav>

        <NavBar className="some-link" to="/">
          Home
          </NavBar>
        <NavBar to="/char/:id">Character Card </NavBar>

      </nav>

      <main>
        <Header />
        {/* <CharacterCard />
        <CharacterList />  */}


        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/char/:id" component={CharacterList} />
      </main>
    </div>
  );
}
