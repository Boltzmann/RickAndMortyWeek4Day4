import {Character} from "../model/Character";
import "./CharacterDetailsCard.css"

type CharacterProps = {
    character : Character;
}

export default function CharacterDetailCard({character} : CharacterProps) {

    return <div id="CharacterDetailsCard">
        <img src={character.image} alt={character.image}/>
        <div className="characterDetails">
         <div>{character.name}</div>
         <div>Gender: {character.gender}</div><div className="characterDetails">Location: {character.location.name}</div>
         <div>Type: {character.type}</div>
         <div>Location: {character.location.name}</div>
         <div>Origin: {character.origin.name}</div>
         <div>Status: {character.status}</div>
         <div>Species: {character.species}</div>
         <div>Created: {character.created}</div>
        </div>
    </div>
}