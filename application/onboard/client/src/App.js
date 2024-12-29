import './App.css';
import React , { useState , useEffect}from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import MemberPage from './components/MemberPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Logout from './components/Logout';
import NavBar from './components/NavBar'; 
import News from './components/News';

function App() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    // Load the user's preference from localStorage
    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(savedMode);
    }, []);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('darkMode', newMode);

        const iframe = document.getElementById('news-iframe');
        if (iframe) {
            iframe.contentWindow.postMessage({ darkMode: newMode }, '*');
        }
    };

    return (
         <div className={isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark'}>
            <Router>
                <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                <Routes>
                    <Route exact path='/' element={<HomePage isDarkMode={isDarkMode} />} />
                    <Route path="/signup" element={<SignUp isDarkMode={isDarkMode} />} />
                    <Route path="/login" element={<Login isDarkMode={isDarkMode} />} />
                    <Route path="/member/:name" element={<MemberPage isDarkMode={isDarkMode}/>} />
                    <Route path="/logout" element={<Logout isDarkMode={isDarkMode} />} />
                    <Route path="/about" element={<AboutPage isDarkMode={isDarkMode} />} />
                    <Route path="/news" element={<News isDarkMode={isDarkMode} />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
