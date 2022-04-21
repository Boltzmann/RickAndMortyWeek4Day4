import {useEffect, useState} from "react";
import {Character} from "../model/Character";

export default function useCharacters(){

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

    return fetchedCharacters
}