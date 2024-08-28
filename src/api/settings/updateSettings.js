// src/api/settings/updateSettings.js

import { apiRequest } from '../../utils/api';

export const updateSettings = async (settings) => {
    try {
        const response = await apiRequest('/settings/updateSettings', 'POST', settings);

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Failed to update settings' };
        }
    } catch (error) {
        console.error('Error updating settings:', error);
        return { success: false, error: error.message };
    }
};
