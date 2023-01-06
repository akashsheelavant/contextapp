import React, { Component } from 'react'
import { AuthenticationContext } from '../contexts/AuthenticationContext'
import { ThemeContext } from '../contexts/ThemeContext'

class Navbar extends Component {
    static contextType = ThemeContext

    render() {
        return (
            <AuthenticationContext>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                    const { isAuthenticated, toggleAuth } = authContext
                    const { isLightTheme, light, dark } = themeContext
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
                    )
                }}</ThemeContext.Consumer>
            )}</AuthenticationContext>
        );
    }
}

export default Navbar;