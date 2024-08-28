// src/api/admin/getOverview.js

import { apiRequest } from '../../utils/api';

export const getOverview = async () => {
    try {
        const response = await apiRequest('/admin/getOverview');

        if (response) {
            return { success: true, data: response };
        } else {
            return { success: false, error: 'Overview not found' };
        }
    } catch (error) {
        console.error('Error fetching overview:', error);
        return { success: false, error: error.message };
    }
};
