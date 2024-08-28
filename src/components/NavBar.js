import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/profile" activeClassName="active">Profile</NavLink></li>
                <li><NavLink to="/matches" activeClassName="active">Matches</NavLink></li>
                <li><NavLink to="/top-picks" activeClassName="active">Top Picks</NavLink></li>
                <li><NavLink to="/settings" activeClassName="active">Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;
