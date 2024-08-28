import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ResetPasswordPage = ({ resetPassword }) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleReset = () => {
        if (newPassword === confirmPassword) {
            resetPassword(newPassword);
            alert('Password has been reset successfully.');
        } else {
            alert('Passwords do not match. Please try again.');
        }
    };

    return (
        <div className="reset-password-page">
            <Header />
            <main>
                <h2>Reset Password</h2>
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New Password"
                />
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                />
                <button onClick={handleReset}>Reset Password</button>
            </main>
            <Footer />
        </div>
    );
}

export default ResetPasswordPage;
