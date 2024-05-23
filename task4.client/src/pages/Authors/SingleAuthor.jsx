import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import authorsService from "../../api/AuthorsService";
import BookCard from "./BookCard";
import BookModal from './BookModal';
import booksService from "../../api/BooksService";
import genresService from "../../api/GenresService";
import './SingleAuthor.css';

function SingleAuthor() {
    const [authorData, setAuthorData] = useState('');
    const [newBooks, setNewBooks] = useState([]);
    const [genres, setGenres] = useState([]);
    const [loaded, setloaded] = useState(false);
    const [bookModalOpen, setBookModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="single-author-box">
            <div className="info-group">
                <div className="info-item">
                    <div className="text-item">
                        Name
                    </div>
                    <div className="input-item">
                        <input value={authorData.name} disabled></input>
                    </div>
                </div>

                <div className="info-item">
                    <div className="text-item">
                        Surname
                    </div>
                    <div className="input-item">
                        <input value={authorData.surname} disabled></input>
                    </div>
                </div>

                <div className="info-item">
                    <div className="text-item">
                        Patronymic
                    </div>
                    <div className="input-item">
                        <input value={authorData.patronymic} disabled></input>
                    </div>
                </div>
            </div>

            {bookModalOpen && <BookModal
                closeModal={() => setBookModalOpen(false)}
                defaultValue={null}
                authorId={authorData.id}
                onSubmit={addBook}
            />}

            <div className="books-box">
                <div className="top">
                    <label className="title">Books</label>
                    <a className="add-link" onClick={() => setBookModalOpen(true)}>Add Book</a>
                </div>
                <div className="cards-block">
                    {loaded && authorData.books.map((book, index) =>
                        <div key={index}>
                            <BookCard data={book}
                                genres={genres}
                            />
                        </div>
                    )}
                </div>
            </div>

            <div className="save-btn">
                <button onClick={saveData}>Save</button>
            </div>
        </div >
    )

    async function saveData() {
        for (let i = 0; i < newBooks.length; i++) {
            await booksService.addBook(newBooks[i]);
        }
        navigate('/authors');
    }

    function addBook(book) {
        console.log(book);
        setNewBooks(books => [...books, book]);
        const b = authorData.books;
        b.push(book);
        setAuthorData({ ...authorData, books: b })
    }

    async function getData() {
        const id = getId();
        const data = await authorsService.getSingleAuthor(id);
        const g = await genresService.getGenres();
        setGenres(g);
        setAuthorData(data);
        setloaded(true);
    }

    function getId() {
        const url = window.location.href;
        const parts = url.split('/');
        const id = parts[parts.length - 1];
        return id;
    }
}

export default SingleAuthor