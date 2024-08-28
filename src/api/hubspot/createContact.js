// src/api/hubspot/createContact.js

import { apiRequest } from '../../utils/api';

export const createContact = async (contactData) => {
    try {
        const response = await apiRequest('/hubspot/createContact', 'POST', contactData);

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Failed to create contact' };
        }
    } catch (error) {
        console.error('Error creating contact:', error);
        return { success: false, error: error.message };
    }
};
