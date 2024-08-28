// src/api/twilio/startVideoCall.js

import { apiRequest } from '../../utils/api';

export const startVideoCall = async (callData) => {
    try {
        const response = await apiRequest('/twilio/startVideoCall', 'POST', callData);

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Failed to start video call' };
        }
    } catch (error) {
        console.error('Error starting video call:', error);
        return { success: false, error: error.message };
    }
};
