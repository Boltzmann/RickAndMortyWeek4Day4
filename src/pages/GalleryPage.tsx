import React from "react";
import Gallery from "../component/Gallery";
import NoSuchCharacter from "../component/NoSuchCharacter";
import useCharacters from "../hooks/useCharacters";

export default function GalleryPage() {

    const fetchedCharacters = useCharacters()

    return (
        <div>
            {fetchedCharacters.length > 0 ?
                (<Gallery characters={fetchedCharacters}/>) :
                (<NoSuchCharacter/>)}
        </div>
    );
}