import "./Title.css";
import {Link} from "react-router-dom";

export default function Title() {
    return (
        <header>
            <img alt="Rick and Morty Icon" src="https://rickandmortyapi.com/icons/icon-512x512.png" />
            <h1>Rick and Morty</h1>
            <Link to={"/gallery"}>
                Gallery
            </Link>
            </header>
    )
}