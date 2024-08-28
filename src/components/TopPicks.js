import React from 'react';

const TopPicks = ({ picks }) => {
    return (
        <div className="top-picks">
            <h3>Your Top Picks</h3>
            <ul>
                {picks.map((pick, index) => (
                    <li key={index}>
                        <img src={pick.image} alt={`${pick.name}`} />
                        <p>{pick.name}, {pick.age}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TopPicks;
