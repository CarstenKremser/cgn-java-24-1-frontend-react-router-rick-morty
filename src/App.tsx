import axios, {AxiosResponse} from "axios"
import './App.css'
import {useEffect, useState} from "react";
import {Character} from "./characters.ts";
import CharacterGallery from "./CharacterGallery.tsx";
import {Route, Routes} from 'react-router-dom';
import CharacterCard from "./CharacterCard.tsx";
import Navigation from "./Navigation.tsx";
import Welcome from "./Welcome.tsx";

//                <CharacterGallery  characters={characters}/>

function App() {

    const [characters, setCharacters] = useState<Character[]>([])
    const [maxPage, setMaxPage] = useState<number>(10)
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        fetchCharacters(page)
    }, [page]);

    // url:  https://rickandmortyapi.com/api/character/?page=1
    function fetchCharacters(characterPage) {
        axios.get("https://rickandmortyapi.com/api/character/?page=" + characterPage)
            .then((response: AxiosResponse) => {
                console.log(response)
                setMaxPage(response.data.info.pages)
                setCharacters(response.data.results)
        })
    }

    function goToNextPage() {
        console.log("goToNextPage");
        if (page < maxPage) {
            setPage(page + 1)
        }
    }

    function goToPreviousPage() {
        console.log("goToPreviousPage");
        if (page > 1) {
            setPage(page - 1)
        }
    }

    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path={"/characters"} element={<CharacterGallery characters={characters}
                                                                       goToNextPage={goToNextPage}
                                                                       goToPrevPage={goToPreviousPage}/>}/>
            </Routes>
        </>
    )
}

export default App
