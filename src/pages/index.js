import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <main>
                <h1>Welcome to Rizzzle</h1>
                <p>Rizzzle - The Best way to date and find love for you</p>
                <Link to="/signup">Get Started</Link>
                <Link to="/top-picks">View Top Picks</Link>
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;
