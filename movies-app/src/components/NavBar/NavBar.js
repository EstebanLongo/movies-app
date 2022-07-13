import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../logoHenry.png'

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div>
                <img  src='https://t3.ftcdn.net/jpg/04/64/96/92/360_F_464969259_NfZBm3nhl1RLh1B0j70yn8yTAYzAoVYU.jpg'  className="movielogo" alt="img not fount" />
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >HOME</NavLink>
                        <NavLink to="/favs" >FAVORITAS</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}