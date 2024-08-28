import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Filters from '../components/Filters';

const PreferencesPage = ({ applyFilters }) => {
    return (
        <div className="preferences-page">
            <Header />
            <main>
                <h2>Set Your Preferences</h2>
                <Filters applyFilters={applyFilters} />
            </main>
            <Footer />
        </div>
    );
}

export default PreferencesPage;
