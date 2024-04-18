import {Link} from "react-router-dom";

export default function Navigation() {
    return (<>
            <h1>Rick and Morty Gallery</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/characters">Character Gallery</Link>
            </nav>
        </>
    )
}