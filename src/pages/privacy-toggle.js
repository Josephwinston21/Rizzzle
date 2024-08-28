import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyTogglePage = ({ updatePrivacySettings }) => {
    const [isPrivate, setIsPrivate] = useState(false);

    const handleToggle = () => {
        setIsPrivate(!isPrivate);
        updatePrivacySettings(!isPrivate);
    };

    return (
        <div className="privacy-toggle-page">
            <Header />
            <main>
                <h2>Privacy Settings</h2>
                <label>
                    Make Profile Private:
                    <input
                        type="checkbox"
                        checked={isPrivate}
                        onChange={handleToggle}
                    />
                </label>
            </main>
            <Footer />
        </div>
    );
}

export default PrivacyTogglePage;
