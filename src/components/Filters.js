import React, { useState } from 'react';

const Filters = ({ applyFilters }) => {
    const [ageRange, setAgeRange] = useState([18, 100]);
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [hobbies, setHobbies] = useState('');

    const handleApplyFilters = () => {
        applyFilters({ ageRange, height, weight, hobbies });
    };

    return (
        <div className="filters">
            <h3>Filter Your Matches</h3>
            <label>
                Age Range:
                <input type="range" min="18" max="100" value={ageRange} onChange={(e) => setAgeRange([e.target.value, ageRange[1]])} />
            </label>
            <label>
                Height:
                <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
            </label>
            <label>
                Weight:
                <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </label>
            <label>
                Hobbies:
                <input type="text" value={hobbies} onChange={(e) => setHobbies(e.target.value)} />
            </label>
            <button onClick={handleApplyFilters}>Apply Filters</button>
        </div>
    );
}

export default Filters;
