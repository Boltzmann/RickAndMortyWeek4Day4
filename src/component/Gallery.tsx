import {Character} from "../model/Character";
import CharacterCard from "./CharacterCard";
import "./Gallery.css"
import React, {useState} from "react";

type characterGalleryProps = {
    characters : Character[]
}

export default function Gallery({characters}:characterGalleryProps){
    const [count, setCount] = useState<number>(0)

    console.log(count)

    const onButtonClick = () => {
        console.log("Like")
        setCount(count+1)

    }
    return <div id="gallery"><div>Button clicked: {count}</div>
    <button onClick={onButtonClick} id="gallery-button">Click me!</button>
        <div id="gallery-cards"> {characters.map( obj => <CharacterCard character={obj} />)} </div></div>
}

