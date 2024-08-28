// src/api/kafka/sendMessage.js

import { apiRequest } from '../../utils/api';

export const sendMessage = async (messageData) => {
    try {
        const response = await apiRequest('/kafka/sendMessage', 'POST', messageData);

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Failed to send message' };
        }
    } catch (error) {
        console.error('Error sending message through Kafka:', error);
        return { success: false, error: error.message };
    }
};
