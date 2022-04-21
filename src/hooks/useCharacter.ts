import {useEffect, useState} from "react";
import {Character} from "../model/Character";
import axios from "axios";

export default function useCharacter(id:string|undefined) {

    const [fetchedCharacter, setFetchedCharacter] = useState<Character>();
    const url: string = "https://rickandmortyapi.com/api/character/" + id

    useEffect(() => {
        axios.get(url)
            .then(response => response.data)
            .then(character => setFetchedCharacter(character))
            .catch(console.error)
    }, [url])

    return fetchedCharacter
}
