import { apiRequest } from './api';

export const login = async (credentials) => {
    try {
        const userData = await apiRequest('/api/auth/login', 'POST', credentials);
        localStorage.setItem('userToken', userData.token);
        return userData;
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};

export const signup = async (userInfo) => {
    try {
        const userData = await apiRequest('/api/auth/signup', 'POST', userInfo);
        localStorage.setItem('userToken', userData.token);
        return userData;
    } catch (error) {
        console.error('Signup failed:', error);
        throw error;
    }
};

export const logout = () => {
    localStorage.removeItem('userToken');
};
