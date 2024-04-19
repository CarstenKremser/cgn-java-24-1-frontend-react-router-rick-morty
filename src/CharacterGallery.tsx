import {Character} from "./characters.ts";
import CharacterCard from "./CharacterCard.tsx";

type CharacterGalleryProps = {
    characters: Character[],
    goToNextPage: () => void,
    goToPrevPage: () => void
}

export default function CharacterGallery(props: CharacterGalleryProps) {

    return (
        <>
            <div>
                <button onClick={props.goToPrevPage}>prev</button>
                <button onClick={props.goToNextPage}>next</button>
            </div>
            <div>
                <p>
                    Gallery
                </p>
                {props.characters.map(character => <CharacterCard
                    key={character.id}
                    character={character}/>)}
            </div>
            <div>
                <button onClick={props.goToPrevPage}>prev</button>
                <button onClick={props.goToNextPage}>next</button>
            </div>
        </>
    )
}
