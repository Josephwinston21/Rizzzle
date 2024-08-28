// src/api/aws/cloudwatch/logEvents.js

import { apiRequest } from '../../utils/api';

export const logEvents = async (logData) => {
    try {
        const response = await apiRequest('/aws/cloudwatch/logEvents', 'POST', logData);

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Failed to log events' };
        }
    } catch (error) {
        console.error('Error logging events through CloudWatch:', error);
        return { success: false, error: error.message };
    }
};
