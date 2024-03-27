import React from 'react';
import '../Header.css';
import SearchBar from './SearchBar';

function Header() {
    // Function to handle the search logic
    const handleSearch = (searchTerm) => {
        console.log(`Searching for: ${searchTerm}`);
        // Add your search logic here
    };

    return (
        <header className="header-container">
            <div className="header-content">
                <div className="logo">Esubalew's Blog</div>
                <SearchBar onSearch={handleSearch} /> {/* Include the SearchBar component */}
                <nav>
                    <ul className="navigation">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
