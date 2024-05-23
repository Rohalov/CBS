import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import genresService from "../../api/GenresService";

function Genres() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        getGenres();
    }, [])

    return (
        <div className="genres-container">
            <Navbar />
            <div className="genres-info">
                <label className="mail-label">
                    Genres
                </label>
                <ol className="genres-list">
                    {genres.map((genre, index) =>
                        <li key={index}>{genre}</li>
                    )}
                </ol>
            </div>
        </div>
    )

    async function getGenres() {
        const data = await genresService.getGenres();
        setGenres(data);
    }
}

export default Genres