// src/api/auth/signup.js

import { apiRequest } from '../../utils/api';

export const signup = async (userData) => {
    try {
        const response = await apiRequest('/auth/signup', 'POST', userData);

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Signup failed' };
        }
    } catch (error) {
        console.error('Signup failed:', error);
        return { success: false, error: error.message };
    }
};
