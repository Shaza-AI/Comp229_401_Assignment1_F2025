import { Link } from 'react-router-dom';
import '../Layout.css';

const Layout = () => {
            return (
    <nav className="navbar">
        <div className="nav-container">
        {/* Custom Logo */}
        <div className="logo">
            <div className="logo-shape">
            <span>SE</span>
        </div>
        </div>
        
        {/* Navigation Links */}
        <ul className="nav-menu">
            <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
            <Link to="/aboutme" className="nav-link">About Me</Link>
            </li>
            <li className="nav-item">
            <Link to="/education" className="nav-link">Education</Link>
            </li>
            <li className="nav-item">
            <Link to="/projects" className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
            <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
            </li>
        </ul>
        </div>
    </nav>
    );
}

export default Layout;