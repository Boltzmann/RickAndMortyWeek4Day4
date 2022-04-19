import {Character} from "../model/Character";
import CharacterCard from "./CharacterCard";
import "./Gallery.css"
import React, {ChangeEvent, useState} from "react";

type characterGalleryProps = {
    characters : Character[]
}

export default function Gallery({characters}:characterGalleryProps){
    const [text, setText] = useState<string>("Type some text to filter characters...")


    const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event)
        console.log(event.target.value)
        setText(event.target.value)
    }

    // One could put a button here to reset text:
    // setText("")

    return <div id="gallery">
        <div>Filter: {text}</div>
        <input onChange={onTextChange}/>
        <div id="gallery-cards"> {characters.map( obj => <CharacterCard character={obj}/>)} </div></div>
}

