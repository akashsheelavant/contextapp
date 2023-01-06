import React, { useContext } from 'react'
import { AuthenticationContext } from '../contexts/AuthenticationContext'
import { ThemeContext } from '../contexts/ThemeContext'

const Navbar = () => {
    const { isAuthenticated, toggleAuth } = useContext(AuthenticationContext)
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (
        <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Context App</h1>
            <div onClick={toggleAuth}>
                {isAuthenticated ? 'Logged in' : 'Logged out'}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;