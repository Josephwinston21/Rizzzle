// src/api/payments/verifyPayment.js

import { apiRequest } from '../../utils/api';

export const verifyPayment = async (paymentId) => {
    try {
        const response = await apiRequest(`/payments/verifyPayment`, 'POST', { paymentId });

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Failed to verify payment' };
        }
    } catch (error) {
        console.error('Error verifying payment:', error);
        return { success: false, error: error.message };
    }
};
