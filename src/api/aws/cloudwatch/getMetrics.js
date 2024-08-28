// src/api/aws/cloudwatch/getMetrics.js

import { apiRequest } from '../../utils/api';

export const getMetrics = async () => {
    try {
        const response = await apiRequest('/aws/cloudwatch/getMetrics');

        if (response) {
            return { success: true, data: response };
        } else {
            return { success: false, error: 'Metrics not found' };
        }
    } catch (error) {
        console.error('Error fetching metrics from CloudWatch:', error);
        return { success: false, error: error.message };
    }
};
