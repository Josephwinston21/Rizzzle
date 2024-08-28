// src/api/matches/like.js

import { apiRequest } from '../../utils/api';

export const likeProfile = async (profileId) => {
    try {
        const response = await apiRequest(`/matches/like`, 'POST', { profileId });

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Failed to like profile' };
        }
    } catch (error) {
        console.error('Error liking profile:', error);
        return { success: false, error: error.message };
    }
};
