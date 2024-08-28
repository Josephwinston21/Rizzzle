// src/api/razorpay/refundPayment.js

import { apiRequest } from '../../utils/api';

export const refundPayment = async (paymentId) => {
    try {
        const response = await apiRequest('/razorpay/refundPayment', 'POST', { paymentId });

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Failed to refund payment' };
        }
    } catch (error) {
        console.error('Error refunding payment:', error);
        return { success: false, error: error.message };
    }
};
