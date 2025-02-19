import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import members from './MemberData';
import '../navbar.css';

const NavBar = ({ isDarkMode, toggleDarkMode }) => {
    const navigate = useNavigate();

    const goToLogoutPage = () => {
        navigate('/logout');
    };

    const changeTitleInIframe = (newTitle) => {
        const iframe = document.getElementById('news-iframe');
        if (iframe) {
            iframe.contentWindow.postMessage({ title: newTitle }, 'On-Board NewsBreak');
        }
    };

    

    return (
        <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
            <div className="container-fluid">
                <Link className={`navbar-brand ${isDarkMode ? 'text-light' : 'text-dark'}`} to="/">On-Board</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <Link className={`nav-link dropdown-toggle ${isDarkMode ? 'text-light' : 'text-dark'}`} to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About Team
                            </Link>
                            <ul className={`dropdown-menu ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                                {Object.entries(members).map(([key, member]) => (
                                    <li key={key}>
                                        <Link className={`dropdown-item ${isDarkMode ? 'text-light' : 'text-dark'}`} to={`/member/${key}`}>
                                            {member.fullName || member.Name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className="nav-item me-3">
                            <Link className={`nav-link active ${isDarkMode ? 'text-light' : 'text-dark'}`} to="/profile">Profile</Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link className="nav-link" to="/news" onClick={() => changeTitleInIframe('On-Board NewsBreak')}>News</Link>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="darkModeSwitch" checked={isDarkMode} onChange={toggleDarkMode} />
                        <label className={`form-check-label ms-1 me-3 ${isDarkMode ? 'text-light' : 'text-dark'}`} htmlFor="darkModeSwitch">
                            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                        </label>
                    </div>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${isDarkMode ? 'text-light' : 'text-dark'}`} onClick={goToLogoutPage} to="/login">Log-In</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
