import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';


const CharCard = Styled.div`
border: black 2px dotted;
margin-bottom: 2%;
background-color: hotpink;
text-decoration: none;
color: white;
width: 50%;
text-align : center;
margin-left: 25%
box-shadow: gray 5px 10px;
border-radius: 12px;

`
const SearchBox = Styled.input`
border: black 1px solid;
width: 50%;
height: 5vh;
margin-left: 25%;
margin-right:25%;
color: white;
font-weight: bold;
font-size: 100%;
background-color:black;
margin-bottom: 5%;

`
const Number = Styled.h2`
display: flex;
justify-content: flex-end;
padding-right: 5%;
`
const CharText = Styled.div`
 
 
 
`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [Charlist, setCharlist] = useState([]);
  // const [] = useState('');
  const [Search, setSearch] = useState("");
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharlist = () => {
      axios.get
        (`https://rickandmortyapi.com/api/character/`, {}

        )
        .then(response => {
          const characters = response.data.results.filter(character =>
            character.name.toLowerCase().includes(Search.toLowerCase()));
          setCharlist(characters);
          console.log(characters);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getCharlist();
  }, [Search]);

  const handleInputChange = event => {
    setSearch(event.target.value)
  };

  return (
    <>
      <form className="search">
        <SearchBox
          type="text"
          onChange={handleInputChange}
          value={Search}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>



      < section className="character-list" >
        <h2></h2>
        {
          Charlist.map(Chars => (
            // <Link to={`/char/ ${Chars.id}`}>
            <CharDetails key={Chars.id} Chars={Chars} />
            // </Link>
          ))
        }
      </section >
    </>
  );
}
function CharDetails({ Chars }) {
  const { id, name, species, status } = Chars;
  return (
    <CharCard className="Char-card">
      <Number>{id}</Number>
      <CharText>
        <h1>Name: {name}</h1>
      </CharText>
      <CharText>
        <h1>Species: {species}</h1>
      </CharText>

      <CharText>
        <h1>Status: {status}</h1>
      </CharText>
    </CharCard>
  );
}

