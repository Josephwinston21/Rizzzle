// src/api/aws/elasticsearch/indexDocuments.js

import { apiRequest } from '../../utils/api';

export const indexDocuments = async (indexData) => {
    try {
        const response = await apiRequest('/aws/elasticsearch/indexDocuments', 'POST', indexData);

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Failed to index documents' };
        }
    } catch (error) {
        console.error('Error indexing documents in Elasticsearch:', error);
        return { success: false, error: error.message };
    }
};
