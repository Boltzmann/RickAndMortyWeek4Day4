import React, {useEffect, useState} from "react";
import {Character} from "../model/Character";
import {useParams} from "react-router-dom";
import CharacterCard from "../component/CharacterCard";


export default function CharacterDetailsPage() {
    const params = useParams()
    const id = params.id
    const [fetchedCharacter, setFetchedCharacter] = useState<Character>();
    const url:string = "https://rickandmortyapi.com/api/character/" + id

    const fetchCharacter = () => {
        return fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("Network error")
            }).catch(console.error)
    }

    useEffect(() => {
        fetchCharacter()
            .then(body => {
                setFetchedCharacter(body)
            })
    }, [])

    return (
        <div>
            {fetchedCharacter && <CharacterCard character={fetchedCharacter}/>}
        </div>
    );

}