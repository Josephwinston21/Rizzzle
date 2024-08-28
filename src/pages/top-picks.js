import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopPicks from '../components/TopPicks';

const TopPicksPage = ({ picks }) => {
    return (
        <div className="top-picks-page">
            <Header />
            <main>
                <h2>Top Picks</h2>
                <TopPicks picks={picks} />
            </main>
            <Footer />
        </div>
    );
}

export default TopPicksPage;
