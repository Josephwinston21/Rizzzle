// src/api/admin/manageUsers.js

import { apiRequest } from '../../utils/api';

export const manageUsers = async (action, userId) => {
    try {
        const response = await apiRequest('/admin/manageUsers', 'POST', { action, userId });

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Failed to manage users' };
        }
    } catch (error) {
        console.error('Error managing users:', error);
        return { success: false, error: error.message };
    }
};
