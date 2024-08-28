import React, { useState, useEffect } from 'react';

const NotificationBell = ({ fetchNotifications }) => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        fetchNotifications().then(newNotifications => {
            setNotifications(newNotifications);
        });
    }, []);

    return (
        <div className="notification-bell">
            <i className="bell-icon"></i>
            {notifications.length > 0 && <span>{notifications.length}</span>}
        </div>
    );
}

export default NotificationBell;
