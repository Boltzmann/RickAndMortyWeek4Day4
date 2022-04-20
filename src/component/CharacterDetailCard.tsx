import {Character} from "../model/Character";
import "./CharacterCard.css"

type CharacterProps = {
    character : Character;
}

export default function CharacterDetailCard({character} : CharacterProps) {

    return <div id="CharacterDetailsCard">
        <div className="characterDetails">{character.name}</div>
        <div className="characterDetails">Gender: {character.gender}</div><div className="characterDetails">Location: {character.location.name}</div>
        <div className="characterDetails">Type: {character.type}</div>
        <div className="characterDetails">Location: {character.location.name}</div>
        <div className="characterDetails">Origin: {character.origin.name}</div>
        <div className="characterDetails">Status: {character.status}</div>
        <div className="characterDetails">Species: {character.species}</div>
        <div className="characterDetails">Created: {character.created}</div>
    </div>
}