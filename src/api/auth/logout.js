// src/api/auth/logout.js

export const logout = () => {
    try {
        localStorage.removeItem('authToken');
        return { success: true };
    } catch (error) {
        console.error('Logout failed:', error);
        return { success: false, error: error.message };
    }
};
