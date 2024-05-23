import { useState } from "react";
import CloseIcon from "../../components/CloseIcon";
import genresService from "../../api/GenresService";
import { useEffect } from "react";

function BookModal({ closeModal, defaultValue, authorId, onSubmit }) {
    const [modalData, setModalData] = useState(
        defaultValue || {
            name: "",
            genre: "1",
            pages: "",
            authorId: authorId
        }
    );
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        getGenres();
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setModalData({ ...modalData, [name]: value });
    };

    return (
        <div className="modal-container">
            <div className="modal">
                <div className="close-button">
                    <button onClick={closeModal}>
                        <CloseIcon height="24" width="24" />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className='form-label'>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className='input-block'>
                            <input type="text" name="name" onChange={handleInputChange} value={modalData.name} required></input>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className='form-label'>
                            <label htmlFor="genre">Genre</label>
                        </div>
                        <div className='input-block'>
                            <select name="genre" onChange={handleInputChange} value={modalData.genre}>
                                {genres.map((genre, index) =>
                                    <option key={index} value={index}>{genre}</option>
                                )}
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className='form-label'>
                            <label htmlFor="pages">Pages</label>
                        </div>
                        <div className='input-block'>
                            <div className='input-block'>
                                <input type="number" name="pages" step="1" min="0" onChange={handleInputChange} value={modalData.pages} required></input>
                            </div>
                        </div>
                    </div>

                    <div className="submit-button">
                        {defaultValue
                            ? <button type="submit">Edit</button>
                            : <button type="submit">Add</button>
                        }
                    </div>
                </form>
            </div >
        </div >
    )

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(modalData);
        closeModal();
    }

    async function getGenres() {
        const data = await genresService.getGenres();
        setGenres(data);
    }
}

export default BookModal