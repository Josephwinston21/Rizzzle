import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Settings from '../components/Settings';

const SettingsPage = ({ updateSettings }) => {
    return (
        <div className="settings-page">
            <Header />
            <main>
                <Settings updateSettings={updateSettings} />
            </main>
            <Footer />
        </div>
    );
}

export default SettingsPage;
