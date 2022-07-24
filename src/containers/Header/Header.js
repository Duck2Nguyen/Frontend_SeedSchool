import { useState } from 'react';
import './Header.scss'
function Header() {
    const handleInput = () => {
    }
    const [value, setValue] = useState('');
    const [arrValue, setarrValue] = useState([]);
    return (
        <header>

            <a href="#" className="logo"><i className="fas fa-child"></i>SeedSchool</a>

            <div id="menu-bars" className="fas fa-bars"></div>

            <nav className="navbar">
                <a href="/home">Home</a>
                <a href="#features">Features</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#teacher">Teacher</a>
                <a href="#contact">Contact</a>
                <a href="/login">Login</a>
            </nav>

        </header>
    )
}
export default Header