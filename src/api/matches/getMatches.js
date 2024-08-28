// src/api/matches/getMatches.js

import { apiRequest } from '../../utils/api';

export const getMatches = async () => {
    try {
        const response = await apiRequest('/matches/getMatches');

        if (response) {
            return { success: true, data: response };
        } else {
            return { success: false, error: 'No matches found' };
        }
    } catch (error) {
        console.error('Error fetching matches:', error);
        return { success: false, error: error.message };
    }
};
