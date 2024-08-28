// src/api/hubspot/fetchCRMData.js

import { apiRequest } from '../../utils/api';

export const fetchCRMData = async () => {
    try {
        const response = await apiRequest('/hubspot/fetchCRMData');

        if (response) {
            return { success: true, data: response };
        } else {
            return { success: false, error: 'CRM data not found' };
        }
    } catch (error) {
        console.error('Error fetching CRM data:', error);
        return { success: false, error: error.message };
    }
};
