import React, { useState } from 'react';

const LoginSignupPage = ({ login, signup }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        if (isLogin) {
            login({ email, password });
        } else {
            signup({ email, password });
        }
    };

    return (
        <div className="login-signup-page">
            <h3>{isLogin ? 'Login' : 'Signup'}</h3>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleSubmit}>{isLogin ? 'Login' : 'Signup'}</button>
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Need to signup?' : 'Already have an account? Login'}
            </button>
        </div>
    );
}

export default LoginSignupPage;
