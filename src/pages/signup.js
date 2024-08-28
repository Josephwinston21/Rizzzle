import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginSignupPage from '../components/LoginSignupPage';

const SignupPage = ({ signup }) => {
    return (
        <div className="signup-page">
            <Header />
            <LoginSignupPage signup={signup} />
            <Footer />
        </div>
    );
}

export default SignupPage;
