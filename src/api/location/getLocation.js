// src/api/location/getLocation.js

import { apiRequest } from '../../utils/api';

export const getLocation = async () => {
    try {
        const response = await apiRequest('/location/getLocation');

        if (response) {
            return { success: true, data: response };
        } else {
            return { success: false, error: 'Location not found' };
        }
    } catch (error) {
        console.error('Error fetching location:', error);
        return { success: false, error: error.message };
    }
};
