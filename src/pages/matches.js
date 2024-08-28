import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileCard from '../components/ProfileCard';

const MatchesPage = ({ matches }) => {
    return (
        <div className="matches-page">
            <Header />
            <main>
                <h2>Your Matches</h2>
                <div className="matches-list">
                    {matches.map(match => (
                        <ProfileCard key={match.id} profile={match} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default MatchesPage;
