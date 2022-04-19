import {Character} from "../model/Character";
import CharacterCard from "./CharacterCard";
import "./Gallery.css"
import React, {ChangeEvent, useState} from "react";

type characterGalleryProps = {
    characters : Character[]
}



export default function Gallery({characters}:characterGalleryProps){
    const [text, setText] = useState<string>("Type some text to filter characters...")
    const [filteredCharacters, setFilteredCharacters] = useState<Character[]> (characters);

    const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

    const onButtonClick = () => {
        setFilteredCharacters(characters.filter(character => character.name.includes(text)))
    }

    const onResetButtonClick = () => {
        setFilteredCharacters(characters)
    }

    return <div id="gallery">
        <input onChange={onTextChange}/>
        <button onClick={onButtonClick} id="gallery-button">Filter cards</button>
        <button onClick={onResetButtonClick} id="gallery-button">Reset filter</button>
        <div id="gallery-cards"> {filteredCharacters.map( obj => <CharacterCard character={obj} />)} </div></div>
}

