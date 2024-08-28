// src/api/notifications/getNotifications.js

import { apiRequest } from '../../utils/api';

export const getNotifications = async () => {
    try {
        const response = await apiRequest('/notifications/getNotifications');

        if (response) {
            return { success: true, data: response };
        } else {
            return { success: false, error: 'No notifications found' };
        }
    } catch (error) {
        console.error('Error fetching notifications:', error);
        return { success: false, error: error.message };
    }
};
