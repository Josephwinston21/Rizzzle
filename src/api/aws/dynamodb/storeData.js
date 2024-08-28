// src/api/aws/dynamodb/storeData.js

import { apiRequest } from '../../utils/api';

export const storeData = async (data) => {
    try {
        const response = await apiRequest('/aws/dynamodb/storeData', 'POST', data);

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Failed to store data in DynamoDB' };
        }
    } catch (error) {
        console.error('Error storing data in DynamoDB:', error);
        return { success: false, error: error.message };
    }
};
