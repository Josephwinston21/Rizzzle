// src/api/aws/elasticsearch/searchDocuments.js

import { apiRequest } from '../../utils/api';

export const searchDocuments = async (searchData) => {
    try {
        const response = await apiRequest('/aws/elasticsearch/searchDocuments', 'POST', searchData);

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Failed to search documents' };
        }
    } catch (error) {
        console.error('Error searching documents in Elasticsearch:', error);
        return { success: false, error: error.message };
    }
};
