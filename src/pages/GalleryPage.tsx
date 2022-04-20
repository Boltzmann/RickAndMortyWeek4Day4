import React, {useEffect, useState} from "react";
import {Character} from "../model/Character";
import Gallery from "../component/Gallery";
import NoSuchCharacter from "../component/NoSuchCharacter";

export default function GalleryPage() {
    const [fetchedCharacters, setFetchedCharacters] = useState<Character[]>([]);

    const fetchCharacters = () => {
        return fetch('https://rickandmortyapi.com/api/character')
            .then(response => {
                if (response.ok) {
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
            {fetchedCharacters.length > 0 ?
                (<Gallery characters={fetchedCharacters}/>) :
                (<NoSuchCharacter/>)}
        </div>
    );
}