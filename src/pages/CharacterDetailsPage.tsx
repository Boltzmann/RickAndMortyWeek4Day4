import React, {useEffect, useState} from "react";
import {Character} from "../model/Character";
import {useParams} from "react-router-dom";
import CharacterDetailCard from "../component/CharacterDetailCard";
import axios from "axios";


export default function CharacterDetailsPage() {
    const params = useParams()
    const id = params.id
    const [fetchedCharacter, setFetchedCharacter] = useState<Character>();
    const url:string = "https://rickandmortyapi.com/api/character/" + id

    useEffect(() => {
        axios.get(url)
            .then(response => response.data)
            .then(character => setFetchedCharacter(character))
            .catch(console.error)
    }, [])

    return (
        <div>
            {fetchedCharacter && <CharacterDetailCard character={fetchedCharacter}/>}
        </div>
    );

}