// src/api/aws/beanstalk/deployApp.js

import { apiRequest } from '../../utils/api';

export const deployApp = async (deploymentData) => {
    try {
        const response = await apiRequest('/aws/beanstalk/deployApp', 'POST', deploymentData);

        if (response.success) {
            return { success: true, data: response };
        } else {
            return { success: false, error: response.error || 'Failed to deploy application' };
        }
    } catch (error) {
        console.error('Error deploying application through Elastic Beanstalk:', error);
        return { success: false, error: error.message };
    }
};
