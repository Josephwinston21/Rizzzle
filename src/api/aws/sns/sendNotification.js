// src/api/aws/sns/sendNotification.js

import { apiRequest } from '../../utils/api';

export const sendNotification = async (notificationData) => {
    try {
        const response = await apiRequest('/aws/sns/sendNotification', 'POST', notificationData);

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Failed to send notification' };
        }
    } catch (error) {
        console.error('Error sending notification through SNS:', error);
        return { success: false, error: error.message };
    }
};
