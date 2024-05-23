import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import AuthorsTable from './AuthorsTable';
import AuthorsModal from './AuthorsModal';
import authorService from "./../../api/AuthorsService";
import './Authors.css';

function Authors() {
    const [authors, setAuthors] = useState([]);
    const [authorsModalOpen, setAuthorsModalOpen] = useState(false);
    const [authorData, setAuthorData] = useState(null);

    useEffect(() => {
        getData();
    },[])

    return (
        <div>
            <Navbar />
            <div className="add-author-block">
                <a className="add-link" onClick={() => setAuthorsModalOpen(true)}>Add author</a>
            </div>

            {authorsModalOpen && <AuthorsModal
                closeModal={() => {
                    setAuthorsModalOpen(false);
                    setAuthorData(null);
                    getData();
                }}
                defaultValue={authorData}
            />}

            <div className="table-container">
                <AuthorsTable authors={authors}
                    deleteAuthor={handleDelete}
                    updateData={getData}
                />
            </div>
        </div>
    )

    async function getData() {
        const data = await authorService.getAuthors();
        setAuthors(data);
    }

    async function handleDelete(id) {
        await authorService.deleteAuthors(id);
        await getData();
    }
}

export default Authors