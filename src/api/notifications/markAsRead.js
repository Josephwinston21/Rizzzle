// src/api/notifications/markAsRead.js

import { apiRequest } from '../../utils/api';

export const markAsRead = async (notificationId) => {
    try {
        const response = await apiRequest(`/notifications/markAsRead`, 'POST', { notificationId });

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Failed to mark notification as read' };
        }
    } catch (error) {
        console.error('Error marking notification as read:', error);
        return { success: false, error: error.message };
    }
};
