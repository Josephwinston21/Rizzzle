// src/api/razorpay/capturePayment.js

import { apiRequest } from '../../utils/api';

export const capturePayment = async (paymentId) => {
    try {
        const response = await apiRequest('/razorpay/capturePayment', 'POST', { paymentId });

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Failed to capture payment' };
        }
    } catch (error) {
        console.error('Error capturing payment:', error);
        return { success: false, error: error.message };
    }
};
