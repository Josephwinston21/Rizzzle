import { apiRequest } from './api';

export const uploadFileToS3 = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('/api/aws/s3/uploadFile', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('File upload failed');
        }

        const fileData = await response.json();
        console.log('File uploaded successfully:', fileData);
        return fileData;
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
    }
};

export const sendNotification = async (message) => {
    try {
        const notificationData = await apiRequest('/api/aws/sns/sendNotification', 'POST', { message });
        console.log('Notification sent successfully:', notificationData);
        return notificationData;
    } catch (error) {
        console.error('Error sending notification:', error);
        throw error;
    }
};

export const queryDatabase = async (query) => {
    try {
        const queryResult = await apiRequest('/api/aws/rds/queryDatabase', 'POST', { query });
        console.log('Query result:', queryResult);
        return queryResult;
    } catch (error) {
        console.error('Database query failed:', error);
        throw error;
    }
};
