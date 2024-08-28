// src/api/profile/updateProfile.js

import { apiRequest } from '../../utils/api';

export const updateProfile = async (profileData) => {
    try {
        const response = await apiRequest('/profile/updateProfile', 'POST', profileData);

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Failed to update profile' };
        }
    } catch (error) {
        console.error('Error updating profile:', error);
        return { success: false, error: error.message };
    }
};
