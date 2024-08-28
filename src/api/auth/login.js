// src/api/auth/login.js

import { apiRequest } from '../../utils/api';

export const login = async (username, password) => {
    try {
        const response = await apiRequest('/auth/login', 'POST', { username, password });

        if (response.success && response.token) {
            localStorage.setItem('authToken', response.token);
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Login failed' };
        }
    } catch (error) {
        console.error('Login failed:', error);
        return { success: false, error: error.message };
    }
};
