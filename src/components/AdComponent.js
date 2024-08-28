import React, { useState, useEffect } from 'react';

const AdComponent = () => {
    const [shouldDisplayAd, setShouldDisplayAd] = useState(false);
    const [sessionStart, setSessionStart] = useState(Date.now());

    useEffect(() => {
        const checkAdDisplay = setInterval(() => {
            const timeElapsed = (Date.now() - sessionStart) / 1000 / 60; // in minutes
            if (timeElapsed > 15 && timeElapsed % 15 === 0) {
                setShouldDisplayAd(true);
            }
        }, 60000); // check every minute

        return () => clearInterval(checkAdDisplay);
    }, [sessionStart]);

    const handleCloseAd = () => {
        setShouldDisplayAd(false);
    };

    return shouldDisplayAd ? (
        <div className="ad-component">
            <h3>Ad Content Here</h3>
            <button onClick={handleCloseAd}>Close Ad</button>
        </div>
    ) : null;
}

export default AdComponent;
