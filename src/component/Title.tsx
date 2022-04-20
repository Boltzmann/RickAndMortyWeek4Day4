import "./Title.css";
import {Link} from "react-router-dom";

export default function Title() {
    return (
        <header>
            <div id={"own-container"}>
                <img alt="Rick and Morty Icon" src="https://rickandmortyapi.com/icons/icon-512x512.png" />
                <h1>Rick and Morty</h1>
            </div>
            <p>
            <Link to={"/home"}>
                Home
            </Link>
            <Link to={"/gallery"}>
                Gallery
            </Link>
            </p>
            </header>
    )
}