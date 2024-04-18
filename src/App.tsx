import './App.css'
import {useState} from "react";
import {Character, charactersResponse} from "./characters.ts";
import CharacterGallery from "./CharacterGallery.tsx";
import {Route, Routes} from 'react-router-dom';
import CharacterCard from "./CharacterCard.tsx";
import Navigation from "./Navigation.tsx";
import Welcome from "./Welcome.tsx";

//                <CharacterGallery  characters={characters}/>

function App() {

    const [characters, setCharacters] = useState<Character[]>(charactersResponse.results)

    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path={"/characters"} element={<CharacterGallery characters={characters}/>}/>
            </Routes>
        </>
    )
}

export default App
