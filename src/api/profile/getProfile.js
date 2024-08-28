// src/api/profile/getProfile.js

import { apiRequest } from '../../utils/api';

export const getProfile = async () => {
    try {
        const response = await apiRequest('/profile/getProfile');

        if (response) {
            return { success: true, data: response };
        } else {
            return { success: false, error: 'Profile not found' };
        }
    } catch (error) {
        console.error('Error fetching profile:', error);
        return { success: false, error: error.message };
    }
};
