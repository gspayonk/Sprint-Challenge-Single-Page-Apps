import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [currentChar, setChar] = useState ('https://rickandmortyapi.com/api/character/');

  const [charsSet, setCharSet] = useState(null);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

      axios
        .get(`${currentChar}`)

        .then(response => {
          console.log(response);
          setCharSet(response.data);
        })

        .catch(error => {
          console.error('Server Error', error);
        });

  }, [currentChar]);

  return (
    <div className="character-list">
      {charsSet ?(charsSet.results.map(character => 
      <CharacterCard data={character}
      />)) : ( <h1>Fetching</h1>
      )}
    </div>
  );
};
