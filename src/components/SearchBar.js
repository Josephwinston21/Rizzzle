import React, { useState } from 'react';

const SearchBar = ({ performSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        if (searchTerm.trim()) {
            performSearch(searchTerm);
        } else {
            alert('Please enter a search term.');
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for profiles..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchBar;
