import {Character} from "../model/Character";
import "./CharacterCard.css"
import LikeCharacterButton from "./LikeCharacterButton";
import {useNavigate} from "react-router-dom";

type CharacterProps = {
    character : Character;
}

export default function CharacterCard({character} : CharacterProps) {

    const navigate = useNavigate();

    const onCardClick = () => {
        navigate(`/character/${character.id}`)
    }

    return <div id="CharacterCard" onClick={onCardClick}>
        <div className="characterText">{character.name}</div>
        <img src={character.image} alt={character.image}/>
        <div className="characterText">{character.location.name}</div>
        <div className="characterText" ><LikeCharacterButton /></div>
    </div>
}