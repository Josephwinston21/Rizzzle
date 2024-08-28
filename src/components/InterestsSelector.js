import React, { useState } from 'react';

const InterestsSelector = ({ setInterests }) => {
    const [interests, updateInterests] = useState([]);

    const handleInterestChange = (event) => {
        const value = event.target.value;
        updateInterests(prevInterests => [...prevInterests, value]);
        setInterests(prevInterests => [...prevInterests, value]);
    };

    return (
        <div className="interests-selector">
            <h3>Select Your Interests</h3>
            <input
                type="text"
                placeholder="Add interests"
                onChange={handleInterestChange}
            />
            <div>
                {interests.map((interest, index) => (
                    <span key={index}>{interest}</span>
                ))}
            </div>
        </div>
    );
}

export default InterestsSelector;
