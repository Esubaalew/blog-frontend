// SearchBar.js
import React, { useState } from 'react';
import '../SearchBar.css'; // Make sure to create and import your SearchBar CSS

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm); // This function will be passed down from the parent component
    };

    return (
        <form onSubmit={handleSearchSubmit} className="search-form">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    );
}

export default SearchBar;
