import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginSignupPage from '../components/LoginSignupPage';

const LoginPage = ({ login }) => {
    return (
        <div className="login-page">
            <Header />
            <LoginSignupPage login={login} />
            <Footer />
        </div>
    );
}

export default LoginPage;
