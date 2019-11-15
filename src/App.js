import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import { Route, Link } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage.js";

export default function App() {
  return (
    <div>
      <nav>
        <div className="nav-links">
          <Link className="some-link" to="/">
            Home
          </Link>
          <Link to="/char/:id">Character Card </Link>
        </div>
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
