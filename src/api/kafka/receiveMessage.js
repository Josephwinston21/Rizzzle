// src/api/kafka/receiveMessage.js

import { apiRequest } from '../../utils/api';

export const receiveMessage = async () => {
    try {
        const response = await apiRequest('/kafka/receiveMessage');

        if (response) {
            return { success: true, data: response };
        } else {
            return { success: false, error: 'No messages received' };
        }
    } catch (error) {
        console.error('Error receiving message through Kafka:', error);
        return { success: false, error: error.message };
    }
};
