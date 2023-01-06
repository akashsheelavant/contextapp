import React from 'react'
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle'
import AuthenticationContextProvider from './contexts/AuthenticationContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthenticationContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthenticationContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
