import React from "react";
import LikeCharacterButton from "./LikeCharacterButton";

export default function NoSuchCharacter(){
    return <div id={"CharacterCard"}>
        <div className="characterText">No Character found.</div>
        <img src="https://rickandmortyapi.com/api/character/avatar/19.jpeg" alt="No such character image."/>
        <div className="characterText">No location (no character)</div>
        <div className="characterText"><LikeCharacterButton /></div>
    </div>
}