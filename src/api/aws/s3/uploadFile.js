// src/api/aws/s3/uploadFile.js

import { apiRequest } from '../../utils/api';

export const uploadFile = async (fileData) => {
    try {
        const response = await apiRequest('/aws/s3/uploadFile', 'POST', fileData);

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Failed to upload file' };
        }
    } catch (error) {
        console.error('Error uploading file to S3:', error);
        return { success: false, error: error.message };
    }
};
