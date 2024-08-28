// src/api/aws/dynamodb/getData.js

import { apiRequest } from '../../utils/api';

export const getData = async (key) => {
    try {
        const response = await apiRequest('/aws/dynamodb/getData', 'POST', { key });

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Failed to retrieve data from DynamoDB' };
        }
    } catch (error) {
        console.error('Error retrieving data from DynamoDB:', error);
        return { success: false, error: error.message };
    }
};
