// src/api/payments/createPayment.js

import { apiRequest } from '../../utils/api';

export const createPayment = async (planId) => {
    try {
        const response = await apiRequest(`/payments/createPayment`, 'POST', { planId });

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Failed to create payment' };
        }
    } catch (error) {
        console.error('Error creating payment:', error);
        return { success: false, error: error.message };
    }
};
