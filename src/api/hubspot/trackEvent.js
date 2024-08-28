// src/api/hubspot/trackEvent.js

import { apiRequest } from '../../utils/api';

export const trackEvent = async (eventData) => {
    try {
        const response = await apiRequest('/hubspot/trackEvent', 'POST', eventData);

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Failed to track event' };
        }
    } catch (error) {
        console.error('Error tracking event:', error);
        return { success: false, error: error.message };
    }
};
