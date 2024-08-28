import { apiRequest } from './api';

export const initiatePayment = async (planId) => {
    try {
        const paymentData = await createPaymentSession(planId);
        // Razorpay integration would go here
        console.log('Payment initiated:', paymentData);
        return paymentData;
    } catch (error) {
        console.error('Payment initiation failed:', error);
        throw error;
    }
};

export const initiateRefund = async (paymentId) => {
    try {
        const refundData = await apiRequest(`/api/payments/refundPayment`, 'POST', { paymentId });
        console.log('Refund processed:', refundData);
        return refundData;
    } catch (error) {
        console.error('Refund failed:', error);
        throw error;
    }
};
