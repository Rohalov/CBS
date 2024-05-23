import { useState } from 'react';
import CloseIcon from './../../components/CloseIcon';
import authorService from "./../../api/AuthorsService";
import './AuthorsModal.css';

function AuthorsModal({ closeModal, defaultValue }) {
    const [modalData, setModalData] = useState(
        defaultValue || {
            name: "",
            surname: "",
            patronymic: "",
            dateOfBirth: ""
        }
    );
    const date = modalData.dateOfBirth.split('T')[0];

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
                            <label htmlFor="surname">Surname</label>
                        </div>
                        <div className='input-block'>
                            <input type="text" name="surname" onChange={handleInputChange} value={modalData.surname} required></input>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className='form-label'>
                            <label htmlFor="patronymic">Patronymic</label>
                        </div>
                        <div className='input-block'>

                            <input type="text" name="patronymic" onChange={handleInputChange} value={modalData.patronymic}></input>

                        </div>
                    </div>

                    <div className="form-group">
                        <div className='form-label'>
                            <label htmlFor="dateOfBirth">Date Of Birth</label>
                        </div>
                        <div className='input-block'>
                            <input type="date" name="dateOfBirth" onChange={handleInputChange} value={date} required></input>
                        </div>
                    </div>

                    <div className="submit-button">
                        {defaultValue
                            ? <button type="submit">Edit</button>
                            : <button type="submit">Add</button>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
    async function handleSubmit(e) {
        e.preventDefault();
        if (defaultValue == null) {
            await authorService.addAuthor(modalData);
        } else {
            await authorService.updateAuthors(defaultValue.id, modalData);
        }
        closeModal();
    }
}

export default AuthorsModal