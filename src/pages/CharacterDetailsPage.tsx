import React from "react";
import {useParams} from "react-router-dom";
import CharacterDetailCard from "../component/CharacterDetailCard";
import useCharacter from "../hooks/useCharacter";
import {Character} from "../model/Character";


export default function CharacterDetailsPage() {
    const params = useParams()
    const id = params.id

    const fetchedCharacter:Character|undefined = useCharacter(id)

    return (
        <div>
            {fetchedCharacter && <CharacterDetailCard character={fetchedCharacter}/>}
        </div>
    );

}