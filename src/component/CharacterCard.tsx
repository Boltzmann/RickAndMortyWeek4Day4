import {Character} from "../model/Character";
import "./CharacterCard.css"
import LikeCharacterButton from "./LikeCharacterButton";

type CharacterProps = {
    character : Character;
}

export default function CharacterCard({character} : CharacterProps) {
    return <div id="CharacterCard"><div className="characterText">{character.name}</div>
        <img src={character.image} alt={character.image}/>
        <div className="characterText">{character.location.name}</div>
        <div className="characterText"><LikeCharacterButton /></div>
    </div>
}