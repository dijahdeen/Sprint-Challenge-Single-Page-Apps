import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [Charlist, setCharlist] = useState([]);
  // const [] = useState('');
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharlist = () => {
      axios.get
        (`https://rickandmortyapi.com/api/character/`, {

        })
        .then(response => {
          setCharlist(response.data.results);
          console.log(response.data.results);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getCharlist();
  }, []);



  return (
    <section className="character-list">
      <h2></h2>
      {Charlist.map(Chars => (
        <Link to={`/movies/${Chars.id}`}>
          <CharDetails key={Chars.id} Chars={Chars} />
        </Link>
      ))}
    </section>
  );
}
function CharDetails({ Chars }) {
  const { id, name, species, status } = Chars;
  return (
    <div className="Char-card">
      <h2>{id}</h2>
      <div className="Char-name">
        <h1>Name</h1>:{name}
      </div>
      <div className="Char-species">
        <h1>Species</h1>: {species}
      </div>

      <div className="Char-status">
        <h1>Status</h1>: {status}
      </div>
    </div>
  );
}

