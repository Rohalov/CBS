import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className='link-block'>
                <Link to='/authors'>
                    <button className="nav-btn">Authors</button>
                </Link>
            </div>

            <div className='link-block'>
                <Link to='/genres'>
                    <button className="nav-btn">Genres</button>
                </Link>
            </div>
            
            <div className='link-block'>
                <Link to='/books'>
                    <button className="nav-btn">Books</button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar