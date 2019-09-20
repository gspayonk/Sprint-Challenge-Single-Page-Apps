import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';



export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  // const [currentChar, setChar] = useState ('https://rickandmortyapi.com/api/character/');
  const characterId = props.match.params.id
  const [address, setAddress] = useState(`https://rickandmortyapi.com/api/character/${characterId?characterId:''}`)
  const [charsSet, setCharSet] = useState ([])

  function search(str){
    setAddress(`https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(str)}`)
  }
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

      axios
        .get(address)

        .then(response => {
          setCharSet(response.data.results || [response.data]);
          console.log(response.data.results);
        })

        .catch(error => {
          console.error('Server Error', error);
        })

  }, [address]);

  return (
    <>
    <SearchForm search={search}/>
    <div className="character-list">
      {charsSet.map(character => <CharacterCard key={character.id} {...character}
      />)}
    </div>
    </>
  );
};
