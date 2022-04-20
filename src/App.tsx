import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import Title from "./component/Title";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";

export default function App() {
    return (
        <div>

        <BrowserRouter>
            <Title/>
            <Routes>
                <Route path={"home"} element={<HomePage />}/>
                <Route path={"/character/:id"} element={<CharacterDetailsPage/>}/>
                <Route path={"gallery"} element={<GalleryPage />}/>
            </Routes>
        </BrowserRouter>
        </div>
    )
}


