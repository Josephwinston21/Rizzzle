// src/api/settings/getSettings.js

import { apiRequest } from '../../utils/api';

export const getSettings = async () => {
    try {
        const response = await apiRequest('/settings/getSettings');

        if (response) {
            return { success: true, data: response };
        } else {
            return { success: false, error: 'Settings not found' };
        }
    } catch (error) {
        console.error('Error fetching settings:', error);
        return { success: false, error: error.message };
    }
};
