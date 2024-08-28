// src/api/twilio/startVoiceCall.js

import { apiRequest } from '../../utils/api';

export const startVoiceCall = async (callData) => {
    try {
        const response = await apiRequest('/twilio/startVoiceCall', 'POST', callData);

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Failed to start voice call' };
        }
    } catch (error) {
        console.error('Error starting voice call:', error);
        return { success: false, error: error.message };
    }
};
