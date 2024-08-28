// src/api/aws/rds/queryDatabase.js

import { apiRequest } from '../../utils/api';

export const queryDatabase = async (queryData) => {
    try {
        const response = await apiRequest('/aws/rds/queryDatabase', 'POST', queryData);

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Failed to query database' };
        }
    } catch (error) {
        console.error('Error querying database through RDS:', error);
        return { success: false, error: error.message };
    }
};
