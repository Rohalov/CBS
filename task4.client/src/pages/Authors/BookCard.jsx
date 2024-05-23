import { useState } from "react"
import BookModal from "./BookModal";
import genresService from "../../api/GenresService";
import { useEffect } from "react";
import './BookCard.css';

function BookCard({ data, genres }) {

    return (
        <div className="book-card">
            <div className="card-text">
                Name: {data.name}
            </div>
            <div className="card-text">
                Genre: {genres[data.genre]}
            </div>
            <div className="card-text">
                Pages: {data.pages}
            </div>
        </div>
    )
}

export default BookCard