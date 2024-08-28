// src/api/aws/sns/subscribe.js

import { apiRequest } from '../../utils/api';

export const subscribe = async (subscriptionData) => {
    try {
        const response = await apiRequest('/aws/sns/subscribe', 'POST', subscriptionData);

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Failed to subscribe to SNS' };
        }
    } catch (error) {
        console.error('Error subscribing to SNS:', error);
        return { success: false, error: error.message };
    }
};
