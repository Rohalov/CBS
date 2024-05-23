import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import booksService from './../../api/BooksService'
import { useEffect } from 'react';
import BookCard from '../Authors/BookCard';
import BookModal from '../Authors/BookModal';
import genresService from '../../api/GenresService';
import './Books.css';

function Books() {
    const [books, setBooks] = useState([]);
    const [genres, setGenres] = useState([]);
    const [currBook, setCurrBook] = useState(null);
    const [bookModalOpen, setBookModalOpen] = useState(false);

    useEffect(() => {
        getData();
        getGenres();
    }, [])


    return (
        <div className="books-container">
            <div className="header">
                <Navbar />
            </div>
            <div className="main-content">
                {books.map(book =>
                    <div key={book.id}>
                        <div className="book-block">
                            <BookCard data={book}
                                genres={genres}
                            />
                        </div>
                        <div className="action-buttons">
                            <button onClick={() => { setBookModalOpen(true); setCurrBook(book); }}>Edit</button>
                            <button onClick={() => deleteBook(book.id)}>Delete</button>
                        </div>
                    </div>
                )}
            </div>

            {bookModalOpen && <BookModal
                closeModal={() => setBookModalOpen(false)}
                defaultValue={currBook}
                authorId={currBook.authorId}
                onSubmit={updateBook}
            />}
        </div>
    )

    async function updateBook(data) {
        const book = {
            name: data.name,
            genre: data.genre,
            pages: data.pages,
            authorId: data.authorId
        };
        await booksService.updateBook(currBook.id, book);
        await getData();
    }

    async function deleteBook(id) {
        await booksService.deleteBook(id);
        await getData();
    }

    async function getData() {
        const data = await booksService.getBooks();
        setBooks(data);
    }

    async function getGenres() {
        const data = await genresService.getGenres();
        setGenres(data);
    }
}

export default Books