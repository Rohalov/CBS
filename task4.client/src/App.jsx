import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Authors from './pages/Authors/Authors';
import Genres from './pages/Genres/Genres';
import SingleAuthor from './pages/Authors/SingleAuthor';
import Books from './pages/Books/Books';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route index path="/authors" element={<Authors />} />
                <Route path="/authors/:id" element={<SingleAuthor />} />
                <Route path="/genres" element={<Genres />} />
                <Route path="books" element={<Books />} />
            </Routes>
        </Router>
    );
}

export default App;