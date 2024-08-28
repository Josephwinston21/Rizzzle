import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotificationBell from '../components/NotificationBell';

const NotificationsPage = ({ fetchNotifications }) => {
    return (
        <div className="notifications-page">
            <Header />
            <main>
                <h2>Notifications</h2>
                <NotificationBell fetchNotifications={fetchNotifications} />
            </main>
            <Footer />
        </div>
    );
}

export default NotificationsPage;
