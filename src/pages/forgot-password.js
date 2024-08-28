import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ForgotPasswordPage = ({ initiatePasswordReset }) => {
    const [email, setEmail] = useState('');

    const handleReset = () => {
        initiatePasswordReset(email);
        alert('Password reset instructions sent to your email.');
    };

    return (
        <div className="forgot-password-page">
            <Header />
            <main>
                <h2>Forgot Password</h2>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
                <button onClick={handleReset}>Reset Password</button>
            </main>
            <Footer />
        </div>
    );
}

export default ForgotPasswordPage;
