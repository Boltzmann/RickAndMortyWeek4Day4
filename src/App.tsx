import React, {useEffect, useState} from 'react';
import './App.css';
import Title from "./component/Title";
import Gallery from "./component/Gallery";
import {Character} from "./model/Character";
import NoSuchCharacter from "./component/NoSuchCharacter";

export default function App() {
    const [fetchedCharacters, setFetchedCharacters] = useState<Character[]>([]);

        const fetchCharacters = () => {
          return fetch('https://rickandmortyapi.com/api/character')
            .then(response => {
                if(response.ok){
                    return response.json()
                }
                throw new Error("Network error")
            }).catch(console.error)
    }

    useEffect(() => {
        fetchCharacters()
            .then(body => {
                setFetchedCharacters(body.results)
                console.log(body.results)
            })
    }, [])

  return (
    <div>
        <Title />
        {fetchedCharacters.length > 0 ?
            (<Gallery characters = {fetchedCharacters} />) :
            (<NoSuchCharacter/>)}
    </div>
  );
}

