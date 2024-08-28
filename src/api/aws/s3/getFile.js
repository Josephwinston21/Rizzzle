// src/api/aws/s3/getFile.js

import { apiRequest } from '../../utils/api';

export const getFile = async (fileKey) => {
    try {
        const response = await apiRequest('/aws/s3/getFile', 'POST', { fileKey });

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Failed to retrieve file' };
        }
    } catch (error) {
        console.error('Error retrieving file from S3:', error);
        return { success: false, error: error.message };
    }
};
