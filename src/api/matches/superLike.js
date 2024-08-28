// src/api/matches/superLike.js

import { apiRequest } from '../../utils/api';

export const superLikeProfile = async (profileId) => {
    try {
        const response = await apiRequest(`/matches/superLike`, 'POST', { profileId });

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Failed to super like profile' };
        }
    } catch (error) {
        console.error('Error super liking profile:', error);
        return { success: false, error: error.message };
    }
};
