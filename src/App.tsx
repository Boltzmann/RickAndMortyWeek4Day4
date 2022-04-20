import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"home"} element={<HomePage />}>Home</Route>
                <Route path={"gallery"} element={<GalleryPage />}>Gallery</Route>
            </Routes>
        </BrowserRouter>
    )
}

