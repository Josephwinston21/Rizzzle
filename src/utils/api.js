export const apiRequest = async (url, method = 'GET', data = null) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('API request failed');
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const getProfile = () => apiRequest('/api/profile/getProfile');
export const updateProfile = (profileData) => apiRequest('/api/profile/updateProfile', 'POST', profileData);
export const getMatches = () => apiRequest('/api/matches/getMatches');
export const likeProfile = (profileId) => apiRequest(`/api/matches/like`, 'POST', { profileId });
export const superLikeProfile = (profileId) => apiRequest(`/api/matches/superLike`, 'POST', { profileId });
export const fetchNotifications = () => apiRequest('/api/notifications/getNotifications');
export const createPaymentSession = (planId) => apiRequest(`/api/payments/createPayment`, 'POST', { planId });
export const verifyPayment = (paymentId) => apiRequest(`/api/payments/verifyPayment`, 'POST', { paymentId });
export const sendMessage = (messageData) => apiRequest('/api/chat/sendMessage', 'POST', messageData);
export const getLocation = () => apiRequest('/api/location/getLocation');
export const updateSettings = (settings) => apiRequest('/api/settings/updateSettings', 'POST', settings);
export const fetchAdminOverview = () => apiRequest('/api/admin/getOverview');
export const manageUsers = (action, userId) => apiRequest('/api/admin/manageUsers', 'POST', { action, userId });
