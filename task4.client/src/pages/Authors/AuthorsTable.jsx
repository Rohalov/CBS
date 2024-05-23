import { useState } from "react";
import { Link } from 'react-router-dom';
import './AuthorsTable.css';
import AuthorsModal from "./AuthorsModal";

function AuthorsTable({ authors, deleteAuthor, updateData }) {
    const [authorData, setAuthorData] = useState("");
    const [editModalOpen, setEditModalOpen] = useState(false);

    return (
        <div>
            {editModalOpen && <AuthorsModal
                closeModal={() => { setEditModalOpen(false); updateData(); }}
                defaultValue={authorData}
            />}

            <table className="table">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Books</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map(author =>
                        <tr key={author.id}>
                            <td>{`${author.name} ${author.surname.slice(0, 1)}. ${author.patronymic == null || author.patronymic == "" ? "" : author.patronymic.slice(0, 1) + "."}`}</td>
                            <td>{author.books.length}</td>
                            <td>
                                <div className="action-links">
                                    <a onClick={() => { setEditModalOpen(true); setAuthorData(author) }}>Edit</a>
                                    <a onClick={() => deleteAuthor(author.id)}>Delete</a>
                                    <Link to={`/authors/${author.id}`}>
                                        <a>Details</a>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default AuthorsTable