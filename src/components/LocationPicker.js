import React, { useState } from 'react';

const LocationPicker = ({ setLocation }) => {
    const [location, updateLocation] = useState('');

    const handleLocationChange = (event) => {
        updateLocation(event.target.value);
        setLocation(event.target.value);
    };

    return (
        <div className="location-picker">
            <h3>Select Your Location</h3>
            <input
                type="text"
                value={location}
                onChange={handleLocationChange}
                placeholder="Enter your location"
            />
            <div id="map">Google Maps Integration Here</div>
        </div>
    );
}

export default LocationPicker;


//Instructions: Insert your Google Maps API key in the appropriate part of this component when integrating with the map functionality.
